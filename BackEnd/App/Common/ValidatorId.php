<?php

namespace Pi\Visgo\Common;

use Exception;
use Pi\Visgo\Database\Connection;
use Pi\Visgo\Common\ResponseAssemblerError;

class ValidatorId {

    private $connection;

    public function __construct($drive) {
        $this->connection = Connection::getInstance($drive);
    }

    public function ValidatorById($table, $dataId){


            foreach($dataId as $id){
        
                $query = "SELECT * FROM $table WHERE id = :id";
                $stmt = $this->connection->prepare($query);
                $stmt->bindParam(":id", $id);
                $stmt->execute();
                
                $result = ($stmt->fetch() !== false);

                var_dump($result);
                

                if(!$result){
                    ResponseAssemblerError::response(404, "Produto já presente na promoção!");
                    throw new \Exception("Erro ao inserir id no banco!");
                }

                return true;
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

