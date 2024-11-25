<?php
namespace Pi\Visgo\Repository;

use Pi\Visgo\Common\Exceptions\ResourceNotFoundException;
use Pi\Visgo\Model\Art;
use Pi\Visgo\Database\Connection;
use PDO;

class ArtRepository {
    private $connection;
    private $table = "art";


    public function __construct($drive){
        $this->connection = Connection::getInstance($drive);
    }

    public function createArt(Art $art){
        $name = $art->getName();
        $description = $art->getDescription();
        $characteristic = $art->getCharacteristic();
        $is_deleted = $art->getIsDeleted();


        $query = "INSERT INTO $this->table (name, description, characteristic, is_deleted) VALUES (:name, :description, :characteristic, :is_deleted)";

        $stmt = $this->connection->prepare($query);
        
        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":description", $description);
        $stmt->bindParam(":characteristic", $characteristic);
        $stmt->bindParam(":is_deleted", $is_deleted);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;

}

    public function updateArt($id, Art $art){
        $name = $art->getName();
        $description = $art->getDescription();
        $characteristic = $art->getCharacteristic();
        $is_deleted = $art->getIsDeleted();
        
        
        $query = "UPDATE $this->table SET name = :name, description = :description, characteristic = :characteristic, is_deleted = :is_deleted WHERE art.id = :art_id";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":description", $description);
        $stmt->bindParam(":characteristic", $characteristic);
        $stmt->bindParam(":art_id", $id);
        $stmt->bindParam(":is_deleted", $is_deleted);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;

}

    public function getArtById($id): object{
        $query = "SELECT * FROM $this->table WHERE art.id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id", $id, PDO::PARAM_INT);
        $stmt->execute();

        $result = $stmt->fetch(PDO::FETCH_OBJ);

        if (!$result) {
            throw new ResourceNotFoundException("Art", $id);
        }

        return $result;
    }

    public function getAllArt(){
        $query = "SELECT * FROM $this->table";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteByIdArt($id){
        $arraySearch = $this->getArtById($id);
        $query = "DELETE FROM ART WHERE art.id = :id";
        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
        
    }

    public function isDeletedArt($id): bool {
        $is_deleted = 1;

        $query = "UPDATE $this->table SET is_deleted = :is_deleted WHERE $this->table.id = :id";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":is_deleted", $is_deleted);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }

    public function IsNotDeletedArt($id): bool {
        $is_deleted = 0;

        $query = "UPDATE $this->table SET is_deleted = :is_deleted WHERE $this->table.id = :id";
        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":is_deleted", $is_deleted);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }


}