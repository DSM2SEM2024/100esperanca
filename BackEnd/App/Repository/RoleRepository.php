<?php
namespace Pi\Visgo\Repository;

use Pi\Visgo\Model\Role;
use Pi\Visgo\Database\Connection;
use PDO;

class RoleRepository{

    private $connection;
    private $table = "role";

    public function __construct($drive) {
        $this->connection = Connection::getInstance($drive);
    }

    public function createRole(Role $role) {

        $name = $role->getName();


        $query = "INSERT INTO $this->table (name) VALUES (:name)";


        $stmt = $this->connection->prepare($query);


        $stmt->bindParam(":name", $name);


        $executionCompleted = $stmt->execute();



        return $executionCompleted;

    }


    public function updateRole($id, Role $role) {

        $name = $role->getName();  

        $query = "UPDATE $this->table SET name = :name WHERE role.id = :role_id";


        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":role_id", $id);

        $executeCompleted = $stmt->execute();


        return $executeCompleted;

    }

    
    public function searchByRoleId($id){
        $query = "SELECT * FROM $this->table WHERE role.id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id", $id, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);

    }

    public function getAllRoles(){
        $query = "SELECT * FROM $this->table";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteByIdRole($id){
        $arraySearch = $this->searchByRoleId($id);

        $query = "DELETE FROM  WHERE role.id = :id";
        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);

        $executionCompleted = $stmt->execute();
        
        return $executionCompleted;
    }


}

