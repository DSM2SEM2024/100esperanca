<?php

namespace Pi\Visgo\Common;

use Pi\Visgo\Database\Connection;

class ValidatorId {

    private $connection;

    public function __construct($drive) {
        $this->connection = Connection::getInstance($drive);
    }

    public function ValidatorById($table, $dataId){

        $id = $dataId;
    
        $query = "SELECT COUNT(*) FROM $table WHERE id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id", $id);
        $stmt->execute();

        return $stmt->fetchColumn() > 0;

    }

}