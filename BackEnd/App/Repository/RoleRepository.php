<?php
namespace Pi\Visgo\Repository;

use Pi\Visgo\Common\Exceptions\ResourceNotFoundException;
use Pi\Visgo\Model\Role;
use PDO;


class RoleRepository
{

    private PDO $connection;
    private string $table = "role";

    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
    }

    public function createRole(Role $role): bool
    {
        $name = $role->getName();
        $query = "INSERT INTO $this->table (name) VALUES (:name)";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":name", $name);
        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }


    public function updateRole($id, Role $role): bool
    {
        $name = $role->getName();
        $query = "UPDATE $this->table SET name = :name WHERE role.id = :role_id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":role_id", $id);
        $executeCompleted = $stmt->execute();

        return $executeCompleted;
    }

    public function getRoleById(int $idRole): Role
    {
        $query = "SELECT * FROM $this->table WHERE $this->table.id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id", $idRole, PDO::PARAM_INT);
        $stmt->execute();

        $result = $stmt->fetch(PDO::FETCH_OBJ);

        if (!$result) {
            throw new ResourceNotFoundException('Role', $idRole, 404);
        }

        $role = new Role();
        $role->setId($result->id)
            ->setName($result->name);

        return $role;
    }

    public function getRoleByName($role): object
    {
        $query = "SELECT * FROM $this->table WHERE role.name = :name";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":name", $role, PDO::PARAM_STR);
        $stmt->execute();

        $roleData = $stmt->fetch(PDO::FETCH_OBJ);

        if (!$roleData) {
            throw new ResourceNotFoundException('Role', $roleData);
        }

        return $roleData;
    }

    public function getAllRoles(): array
    {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteByIdRole($id): bool
    {
        $arraySearch = $this->getRoleById($id);
        $query = "DELETE FROM  WHERE role.id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id", $id);
        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }


}

