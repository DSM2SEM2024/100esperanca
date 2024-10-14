<?php
namespace App\Repository;

use PDO;
use App\Model\User;
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
        $roleReposito = new RoleRepository($this->connection);

        try {
            $this->connection->beginTransaction();

            $addressRepository->createAddress($user->getAddress());
            
            $address = $this->connection->lastInsertId();

            $roleReposito->createRole($user->getRole());

            $role = $this->connection->lastInsertId();
    
            $name = $user->getName();
            $email = $user->getEmail();
            $password = $user->getPassword();
    
            $query = 'INSERT $this->table(name,email,password,id_role,id_address) VALEUS (:name,:email,:password,:role,:address)';
    
            $stmt = $this->connection->prepare($query);
    
            $stmt->bindParam(':name', $name, PDO::PARAM_STR);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR);
            $stmt->bindParam(':password', $password, PDO::PARAM_STR);
            $stmt->bindParam(':role', $role, PDO::PARAM_INT);
            $stmt->bindParam(':address', $address, PDO::PARAM_INT);
    
            $result = $stmt->execute();

            $this->connection->commit();
            
            return $result;
        } catch (PDOException $e) {
            $this->connection->rollBack();
            return false;
        }

    }

    public function updateUser($id, User $user) { }
    
    public function getUserById($id) {
        $query = 'SELECT * FROM $this->table WHERE $this->table.id = :id';
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
    
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getAllUsers() {
        $query = 'SELECT * FROM $this->table';
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteUserById($id) {

    }
 

}
