<?php
namespace Pi\Visgo\Repository;

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


        $query = "INSERT INTO $this->table (name, description, characteristic) VALUES (:name, :description, :characteristic)";

        $stmt = $this->connection->prepare($query);
        
        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":description", $description);
        $stmt->bindParam(":characteristic", $characteristic);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;

}

    public function updateArt($id, Art $art){
        $name = $art->getName();
        $description = $art->getDescription();
        $characteristic = $art->getCharacteristic();
        
        
        $query = "UPDATE $this->table SET name = :name, description = :description, characteristic = :characteristic WHERE art.id = :art_id";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":description", $description);
        $stmt->bindParam(":characteristic", $characteristic);
        $stmt->bindParam(":art_id", $id);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;

}

    public function searchByIdArt($id){
        $query = "SELECT * FROM $this->table WHERE art.id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id", $id, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getAllArt(){
        $query = "SELECT * FROM $this->table";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteByIdArt($id){
        $arraySearch = $this->searchByIdArt($id);
        $query = "DELETE FROM ART WHERE art.id = :id";
        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
        
    }

}