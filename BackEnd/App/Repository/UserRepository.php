<?php
namespace Pi\Visgo\Repository;

use PDO;
use Exception;
use PDOException;
use Pi\Visgo\Common\Exceptions\ErrorCreatingEntityException;
use Pi\Visgo\Common\Exceptions\ResourceNotFoundException;
use Pi\Visgo\Model\User;
use Pi\Visgo\Model\Address;
use Pi\Visgo\Database\Connection;
use Pi\Visgo\Repository\RoleRepository;
use Pi\Visgo\Repository\AddressRepository;

class UserRepository
{

    private PDO $connection;
    private AddressRepository $addressRepository;
    private RoleRepository $roleRepository;
    private string $table = 'user';
    private string $tableAssocRole = 'user_role';
    private string $tableAssocAddress = 'user_address';

    public function __construct($drive)
    {
        $this->connection = Connection::getInstance($drive);
        $this->addressRepository = new AddressRepository($this->connection);
        $this->roleRepository = new RoleRepository($this->connection);
    }

    public function createUser(User $user): bool
    {
        try {
            $this->connection->beginTransaction();

            $idsAddress = $this->addressRepository->createsMultipleAddresses($user->getAddresses());

            if (empty($idsAddress)) {
                throw new ErrorCreatingEntityException('Address');
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
                throw new ErrorCreatingEntityException('User');
            }

            $idUser = $this->connection->lastInsertId();

            $resultAddresses = $this->creatorAssociationUserAddress($idsAddress, $idUser);

            if (!$resultAddresses) {
                throw new ErrorCreatingEntityException('User_address');
            }


            $resultRole = $this->assignRoleToUser($user->getRole(), $idUser);

            if (!$resultRole) {
                throw new ErrorCreatingEntityException('User_role');
            }

            $this->connection->commit();

            return $resultUser;
        } catch (PDOException $e) {
            $this->connection->rollBack();
            return false;
        }

    }

    public function updateUserWithAddress(User $user): bool
    {
        try {
            $this->connection->beginTransaction();
            $oldUser = $this->getUserById($user->getId());
            $idUser = $oldUser->getId();

            $resultDeleteAddress = $this->deleteUserAddresses($idUser);

            if (!$resultDeleteAddress) {
                throw new Exception("Erro ao deletar Address");
            }

            $idsAddress = $this->addressRepository->createsMultipleAddresses($user->getAddresses());

            if (empty($idsAddress)) {
                throw new ErrorCreatingEntityException('Address');
            }

            $resultAddresses = $this->creatorAssociationUserAddress($idsAddress, $idUser);

            $name = $oldUser->getName();
            $email = $oldUser->getEmail();
            $password = $oldUser->getPassword();

            $query = "UPDATE $this->table SET password = :password, email = :email, name = :name WHERE id = :idUser";
            $stmt = $this->connection->prepare($query);
            $stmt->bindParam(':password', $password, PDO::PARAM_STR);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR);
            $stmt->bindParam(':name', $name, PDO::PARAM_STR);
            $stmt->bindParam(':id', $idUser, PDO::PARAM_INT);
            $result = $stmt->execute();

            $this->connection->commit();

            return $result;
        } catch (PDOException $e) {
            $this->connection->rollBack();
            return false;
        }
    }

    public function updateUserName(User $user)
    {
        $query = "UPDATE $this->table SET name = :name WHERE id = :id";
        $stmt = $this->connection->prepare($query);
        $name = $user->getName();
        $userId = $user->getId();
        $stmt->bindParam(':name', $name, PDO::PARAM_STR);
        $stmt->bindParam(':id', $userId, PDO::PARAM_INT);
        return $stmt->execute();
    }

    public function updateUserEmail(User $user)
    {
        $query = "UPDATE $this->table SET email = :email WHERE id = :id";
        $stmt = $this->connection->prepare($query);
        $email = $user->getEmail();
        $userId = $user->getId();
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->bindParam(':id', $userId, PDO::PARAM_INT);
        return $stmt->execute();
    }

    public function updateUserPassword(User $user)
    {
        $query = "UPDATE $this->table SET password = :password WHERE id = :id";
        $stmt = $this->connection->prepare($query);
        $password = $user->getPassword();
        $userId = $user->getId();
        $stmt->bindParam(':password', $password, PDO::PARAM_STR);
        $stmt->bindParam(':id', $userId, PDO::PARAM_INT);
        return $stmt->execute();
    }


    public function getUserById(int $idUser): User
    {
        $query = "SELECT * FROM $this->table WHERE $this->table.id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(':id', $idUser, PDO::PARAM_INT);
        $stmt->execute();

        $userData = $stmt->fetch(PDO::FETCH_OBJ);

        if (!$userData) {
            throw new ResourceNotFoundException('User', $idUser);
        }

        $userModel = $this->assemblerUserWithAddress($userData);

        return $userModel;
    }

    public function getAllUsers()
    {
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

    public function deleteUserById(int $idUser): bool
    {
        $deleted = 1;

        $query = "UPDATE $this->table SET is_deleted = :is_deleted WHERE id = :idUser";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(':is_deleted', $deleted, PDO::PARAM_INT);
        $stmt->bindParam(':idUser', $idUser, PDO::PARAM_INT);
        $result = $stmt->execute();

        return $result;
    }

    private function assignRoleToUser(array $roles, int $idUser): bool
    {
        try {
            $this->connection->beginTransaction();

            foreach ($roles as $role) {
                $roleEntity = $this->roleRepository->getRoleById($role->getId());
                $query = "INSERT INTO $this->tableAssocRole(id_role, id_user) VALUES(:id_role, :id_user)";
                $stmt = $this->connection->prepare($query);
                $stmt->bindParam(':id_role', $roleEntity->id, PDO::PARAM_INT);
                $stmt->bindParam(':id_user', $idUser, PDO::PARAM_INT);
                $result = $stmt->execute();
            }

            $this->connection->commit();
            return true;
        } catch (\Throwable $e) {
            $this->connection->rollBack();
            return false;
        }
    }

    private function assemblerUserWithAddress(object $userData): User
    {
        $addresses = array();

        $userModel = new User();
        $userModel->setId($userData->id);
        $userModel->setName($userData->name);
        $userModel->setEmail($userData->email);

        foreach ($userData->addresses as $idAddress) {
            $addressData = $this->addressRepository->getAddressById($idAddress);

            $addressModel = new Address();
            $addressModel->setId($addressData->id);
            $addressModel->setState($addressData->state);
            $addressModel->setCity($addressData->city);
            $addressModel->setNeighborhood($addressData->neighborhood);
            $addressModel->setNumber($addressData->number);
            $addressModel->setStreet($addressData->street);
            $addressModel->setCep($addressData->cep);

            array_push($addresses, $addressModel);
        }

        $userModel->setAddresses($addresses);

        return $userModel;
    }

    private function creatorAssociationUserAddress(array $idsAddress, int $idUser): bool
    {
        try {
            $this->connection->beginTransaction();
            foreach ($idsAddress as $idAddress) {
                $query = "INSERT INTO $this->tableAssocAddress(id_user, id_address) VALUES(:id_user, :id_address)";
                $stmt = $this->connection->prepare($query);
                $stmt->bindParam(":id_user", $idUser, PDO::PARAM_INT);
                $stmt->bindParam(":id_address", $idAddress, PDO::PARAM_INT);
                $stmt->execute();
            }

            $this->connection->commit();
            return true;
        } catch (\Throwable $e) {
            $this->connection->rollBack();
            return false;
        }
    }

    private function deleteUserAddresses(int $idUser): bool
    {
        $query = "DELETE FROM $this->tableAssocAddress WHERE id_user = :id_user";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":idUser", $idUser, PDO::PARAM_INT);
        return $stmt->execute();
    }

}
