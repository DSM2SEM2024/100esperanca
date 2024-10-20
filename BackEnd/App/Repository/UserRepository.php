<?php
namespace Pi\Visgo\Repository;

use Exception;
use PDO;
use Pi\Visgo\Model\User;
use PDOException;
use Pi\Visgo\Database\Connection;
use Pi\Visgo\Repository\RepositoryAddress;
use Pi\Visgo\Repository\RoleRepository;

class UserRepository {
    
    private $connection;

    private $table = "user";

    public function __construct($drive) {
        $this->connection = Connection::getInstance($drive);
    }

    public function createUser(User $user) {
        $addressRepository = new RepositoryAddress($this->connection);
        
        try {
            $this->connection->beginTransaction();
            
            $resultAddress = $addressRepository->createAddress($user->getAddress());

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
            $this->assignRoleToUser($user->getRole(), $userId);

            $this->connection->commit();

            return $resultUser;
        } catch (PDOException $e) {
            $this->connection->rollBack();
            return false;
        }
        
    }
    
    public function updateUser($id, User $user) { 
        $addressRepository = new RepositoryAddress($this->connection);
        
        $oldUser = $this->getUserById($id);

        try {
            $this->connection->beginTransaction();

    
            $oldAddress = $addressRepository->searchByIdAddress($oldUser->address);



        } catch (\Throwable $e) {
            # code...
        }

        $query = "UPDATE $this->table SET name=:name, email=:email, password=:password, id_role=:id_role, id_address=:id_address";
        
        $stmt = $this->connection->prepare($query);
    }
    
    public function getUserById($id) {
        $query = "SELECT * FROM $this->table WHERE $this->table.id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
    
        return $stmt->fetch(PDO::FETCH_OBJ);
    }

    public function getAllUsers() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteUserById($id) {
        $query = "DELETE FROM $this->table WHERE $this->table.id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $result = $stmt->execute();

        return $result;
    }

    private function assignRoleToUser($role, $userId) {
        $roleRepository = new RoleRepository($this->connection);
        $roleEntity = $roleRepository->getRoleByName($role);
        $query = 'INSERT INTO user_role(id_role, id_user) VALUES(:id_role, :id_user)';
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(':id_role', $roleEntity->id, PDO::PARAM_INT);
        $stmt->bindParam(':id_user', $userId, PDO::PARAM_INT);
        $result = $stmt->execute();

        return $result;
    }
 

}
