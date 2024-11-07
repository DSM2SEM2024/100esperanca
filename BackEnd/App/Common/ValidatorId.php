<?php

namespace Pi\Visgo\Common;

use Pi\Visgo\Database\Connection;

class ValidatorId {

    private $connection;

    public function __construct($drive) {
        $this->connection = Connection::getInstance($drive);
    }

    public function ValidatorById($table, $dataId){

            foreach($dataId as $id_product){
    
                $query = "SELECT * FROM $table WHERE id_product = :id_product";
                $stmt = $this->connection->prepare($query);
                $stmt->bindParam(":id_product", $id_product);
                $stmt->execute();

                

                var_dump ($stmt->fetch() > 0);

                if(($stmt->fetch() > 0)){

                return false;
            }

            }

    }

    public function ValidatorValuesArray($data){

        $count = array_count_values($data);

        foreach($count as $values=> $quantify){

            if($quantify > 1){
                return true;
            }

            return false;

        }

    }

}