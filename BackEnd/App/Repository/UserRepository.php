<?php
namespace Pi\Visgo\Repository;

use PDO;
use Exception;
use PDOException;
use Pi\Visgo\Model\User;
use Pi\Visgo\Model\Address;
use Pi\Visgo\Database\Connection;
use Pi\Visgo\Repository\RoleRepository;
use Pi\Visgo\Repository\AddressRepository;

class UserRepository {
    
    private $connection;
    private AddressRepository $addressRepository;
    private RoleRepository $roleRepository;
    private $table = "user";

    public function __construct($drive) {
        $this->connection = Connection::getInstance($drive);
        $this->addressRepository = new AddressRepository($this->connection);
        $this->roleRepository = new RoleRepository($this->connection);
    }

    public function createUser(User $user) {
        try {
            $this->connection->beginTransaction();
            
            $resultAddress = $this->addressRepository->createAddress($user->getAddress());

            if (!$resultAddress) {
                throw new Exception("Erro ao criar addressa.");
            }

            $addressId = $this->connection->lastInsertId();
            $name = $user->getName();
            $email = $user->getEmail();
            $password = $user->getPassword();
            
            $query = "INSERT INTO $this->table(password,email,name,id_address) VALUES (:password,:email,:name,:address)";
            
            $stmt = $this->connection->prepare($query);
            $stmt->bindParam(':password', $password, PDO::PARAM_STR);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR);
            $stmt->bindParam(':name', $name, PDO::PARAM_STR);
            $stmt->bindParam(':address', $addressId, PDO::PARAM_INT);
            $resultUser = $stmt->execute();

            if (!$resultUser) {
                throw new Exception("Erro ao criar user.");
            }

            $userId = $this->connection->lastInsertId();

            $resultRole = $this->assignRoleToUser($user->getRole(), $userId);

            if (!$resultRole) {
                throw new Exception("Erro ao associar role a user");
            }

            $this->connection->commit();

            return $resultUser;
        } catch (PDOException $e) {
            $this->connection->rollBack();
            return false;
        }
        
    }
    
    public function updateUserAddress(User $user) {
        try {
            $this->connection->beginTransaction();
            $oldUser = $this->getUserById($user->getId());

            $resultDeleteAddress = $this->addressRepository->deleteByIdAddress($oldUser->getId());

            if (!$resultDeleteAddress) {
                throw new Exception("Erro ao deletar Address");
            }

            $resultCreateNewAddress = $this->addressRepository->createAddress($user->getAddress());

            if (!$resultCreateNewAddress) {
                throw new Exception("Erro ao criar Address");
            }

            $newAddressId = $this->connection->lastInsertId();

            $query = "UPDATE $this->table SET id_address = :id_address";
            $stmt = $this->connection->prepare($query);
            $stmt->bindParam(":id_address", $newAddressId, PDO::PARAM_INT);
            $result = $stmt->execute();

            $this->connection->commit();

            return $result;
        } catch (PDOException $e) {
            $this->connection->rollBack();
            throw new Exception($e->getMessage(), $e->getCode(), $e);
        }
    }
    
    /* 
        Implementação junto com a lógica de login e segmentação de recursos por tipo de usuário
    */
    public function updateUserRole(User $user) {
        try {
            


        } catch (PDOException $e) {
            $this->connection->rollBack();
            throw new Exception($e->getMessage(), $e->getCode(), $e);
        }
    }

    public function updateUserName(User $user) {
        $query = "UPDATE $this->table SET name = :name WHERE id = :id";
        $stmt = $this->connection->prepare($query);
        $name = $user->getName();
        $userId = $user->getId();
        $stmt->bindParam(':name', $name, PDO::PARAM_STR);
        $stmt->bindParam(':id', $userId, PDO::PARAM_INT);
        return $stmt->execute();
    }

    public function updateUserEmail(User $user) {
        $query = "UPDATE $this->table SET email = :email WHERE id = :id";
        $stmt = $this->connection->prepare($query);
        $email = $user->getEmail();
        $userId = $user->getId();
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->bindParam(':id', $userId, PDO::PARAM_INT);
        return $stmt->execute();
    }
    
    public function updateUserPassword(User $user) {
        $query = "UPDATE $this->table SET password = :password WHERE id = :id";
        $stmt = $this->connection->prepare($query);
        $password = $user->getPassword();
        $userId = $user->getId();
        $stmt->bindParam(':password', $password, PDO::PARAM_STR);
        $stmt->bindParam(':id', $userId, PDO::PARAM_INT);
        return $stmt->execute();
    }    
    
    
    public function getUserById($id) {
        $query = "SELECT * FROM $this->table WHERE $this->table.id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        $userData = $stmt->fetch(PDO::FETCH_OBJ);
        $userModel = $this->assemblerUserWithAddress($userData);
        
        return $userModel;
    }

    public function getAllUsers() {
        $usersWithAddress = [];
        $query = "SELECT * FROM $this->table";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();
        $usersData = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        foreach ($usersData as $userData) {
            $userModel = $this->assemblerUserWithAddress(json_decode(json_encode($userData)));
            array_push($usersWithAddress, $userModel);
        }

        return $usersWithAddress;
    }

    public function deleteUserById($userId) {
        $this->connection->exec('PRAGMA foreign_keys = ON;');

        try {
            $userToBeDeleted = $this->getUserById($userId);

            $resultDeleteAddress = $this->addressRepository->deleteByIdAddress($userToBeDeleted->getAddress()->getId());

            if (!$resultDeleteAddress) {
                throw new Exception("Erro ao deletar Address");
            }
    
            $query = "DELETE FROM $this->table WHERE $this->table.id = :id";
            $stmt = $this->connection->prepare($query);
            $stmt->bindParam(':id', $userId, PDO::PARAM_INT);
            $result = $stmt->execute();

        } catch (PDOException $e) {
            $this->connection->rollBack();
            throw new Exception($e->getMessage(), $e->getCode(), $e);
        }

        return $result;
    }

    private function assignRoleToUser($role, $userId) {
        $roleEntity = $this->roleRepository->getRoleByName($role);
        $query = 'INSERT INTO user_role(id_role, id_user) VALUES(:id_role, :id_user)';
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(':id_role', $roleEntity->id, PDO::PARAM_INT);
        $stmt->bindParam(':id_user', $userId, PDO::PARAM_INT);
        $result = $stmt->execute();

        return $result;
    }
    
    private function assemblerUserWithAddress($userData) {
        $userModel = new User();
        $userModel->setId($userData->id);
        $userModel->setName($userData->name);
        $userModel->setEmail($userData->email);

        $addressData = $this->addressRepository->getAddressById($userData->id_address);

        $addressModel = new Address();
        $addressModel->setId($addressData->id);
        $addressModel->setState($addressData->state);
        $addressModel->setCity($addressData->city);
        $addressModel->setNeighborhood($addressData->neighborhood);
        $addressModel->setNumber($addressData->number);
        $addressModel->setStreet($addressData->street);
        $addressModel->setCep($addressData->cep);

        $userModel->setAddress($addressModel);

        return $userModel;
    }

}
