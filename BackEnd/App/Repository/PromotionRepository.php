<?php

namespace Pi\Visgo\Repository;

use Pi\Visgo\Model\Promotion;
use Pi\Visgo\Database\Connection;
use PDO;
use PDOException;
use PDORow;

class PromotionRepository
{

    private $connection;
    private $table = "promotion";
    private $tableassoc = "product_promotion";

    public function __construct($drive) {
        $this->connection = Connection::getInstance($drive);
    }

    public function createPromotion(Promotion $promotion){
        $start_date_promotion = $promotion->getStartDatePromotion();
        $end_date_promotion = $promotion->getEndDatePromotion();
        $cod_promotion = $promotion->getCodPromotion();

        $query = "INSERT INTO $this->table (start_date_promotion, end_date_promotion, cod_promotion) VALUES (:start_date_promotion, :end_date_promotion, :cod_promotion)";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":start_date_promotion", $start_date_promotion);
        $stmt->bindParam(":end_date_promotion", $end_date_promotion);
        $stmt->bindParam(":cod_promotion", $cod_promotion);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }

    public function updatePromotion($id, Promotion $promotion)
    {
        $start_date_promotion = $promotion->getStartDatePromotion();
        $end_date_promotion = $promotion->getEndDatePromotion();
        $cod_promotion = $promotion->getCodPromotion();
        $is_closed = $promotion->getIsClosed();

        $query = "UPDATE $this->table SET start_date_promotion = :start_date_promotion, end_date_promotion = :end_date_promotion, cod_promotion = :cod_promotion, is_closed = :is_closed WHERE $this->table.id = :id";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":start_date_promotion", $start_date_promotion);
        $stmt->bindParam(":end_date_promotion", $end_date_promotion);
        $stmt->bindParam(":cod_promotion", $cod_promotion);
        $stmt->bindParam(":is_closed", $is_closed);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }

    public function searchByIdPromotion($id)
    {
        $query = "SELECT * FROM $this->table WHERE $this->table.id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam("id", $id, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getAllPromotion()
    {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function CloseByIdPromotion($id, Promotion $promotion)
    {
        $id_closed = $promotion->getIsClosed();
        $arraySearch = $this->searchByIdPromotion($id);

        $query = "UPDATE $this->table SET id_closed = :id_closed WHERE $this->table.id = :id";
        $stmt = $this->connection->prepare($query);
        

        $stmt->bindParam(":id_closed", $id_closed);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }

    public function insertProductInPromotion($promotion, $products)
    {
        $id_promotion = $promotion->getId();

        if (!is_array($products)) {
            
        }

        try {
            
            $this->connection->beginTransaction();

            foreach ($products as $product) {
                $id_product = $product->getId();

                $query = "INSERT INTO $this->tableassoc (id_promotion, id_product) VALUES (:id_promotion, :id_product)";

                $stmt = $this->connection->prepare($query);

                $stmt->bindParam(":id_promotion", $id_promotion);
                $stmt->bindParam("id_product", $id_product);

                $executionCompleted = $stmt->execute();
            }

            $this->connection->commit();
            return true;
        } catch (PDOException $e) {
            $this->connection->rollBack();
            throw new PDOException($e);
        }

        return $executionCompleted;
    }

    public function updateProductPromotion($promotion, $product)
    {
        $id_promotion = $promotion->getId();
        $id_product = $product->getId();

        $query = "UPDATE $this->tableassoc SET id_promotion = :id_promotion, id_product = :id_product";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam("id_promotion", $id_promotion);
        $stmt->bindParam("id_product", $id_product);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }

    public function getAllProductPromotion()
    {
        $query = "SELECT * FROM $this->tableassoc";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteProductPromotion($product, $promotion)
    {
        $id_promotion = $promotion->getId();
        $id_product = $product->getId();

        $query = "DELETE FROM $this->tableassoc WHERE id_promotion = :id_promotion AND id_product = :id_product";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam("id_promotion", $id_promotion);
        $stmt->bindParam("id_product", $id_product);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }
}
