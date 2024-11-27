<?php

namespace Pi\Visgo\Repository;

use Exception;
use Pi\Visgo\Model\Promotion;
use Pi\Visgo\Database\Connection;
use PDO;
use PDOException;
use Pi\Visgo\Common\Responses\Response;

class PromotionRepository
{

    private $connection;
    private $table = "promotion";
    private $tableassoc = "product_promotion";

    public function __construct($drive)
    {
        $this->connection = Connection::getInstance($drive);
    }

    public function createPromotion(Promotion $promotion)
    {
        $start_date_promotion = $promotion->getStartDatePromotion();
        $end_date_promotion = $promotion->getEndDatePromotion();
        $cod_promotion = $promotion->getCodPromotion();

        $validCodPromotion = $this->validatorCodPromotion($cod_promotion);

        if ($validCodPromotion) {
            Response::error("Código de promoção já existente!", 400);
            throw new Exception("Código de promoção já existente!");
        }

        $query = "INSERT INTO $this->table (start_date_promotion, end_date_promotion, cod_promotion) VALUES (:start_date_promotion, :end_date_promotion, :cod_promotion)";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":start_date_promotion", $start_date_promotion);
        $stmt->bindParam(":end_date_promotion", $end_date_promotion);
        $stmt->bindParam(":cod_promotion", $cod_promotion);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }

    public function validatorCodPromotion($cod_promotion)
    {

        $query = "SELECT * FROM $this->table WHERE cod_promotion = :cod_promotion";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(':cod_promotion', $cod_promotion);
        $stmt->execute();

        return $stmt->fetch() !== false;

    }

    public function updatePromotion($id, Promotion $promotion)
    {
        $start_date_promotion = $promotion->getStartDatePromotion();
        $end_date_promotion = $promotion->getEndDatePromotion();
        $cod_promotion = $promotion->getCodPromotion();

        $validCodPromotion = $this->validatorCodPromotion($cod_promotion);

        if ($validCodPromotion) {
            Response::error("Código de promoção já existente!", 400);
            throw new Exception("Código de promoção já existente!");
        }

        $query = "UPDATE $this->table SET start_date_promotion = :start_date_promotion, end_date_promotion = :end_date_promotion, cod_promotion = :cod_promotion WHERE $this->table.id = :id";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":start_date_promotion", $start_date_promotion);
        $stmt->bindParam(":end_date_promotion", $end_date_promotion);
        $stmt->bindParam(":cod_promotion", $cod_promotion);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }

    public function ClosePromotionById($id)
    {

        $is_closed = 1;

        $query = "UPDATE $this->table SET is_closed = :is_closed WHERE $this->table.id = :id";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":is_closed", $is_closed);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;

    }

    public function OpenPromotionById($id, Promotion $promotion)
    {

        $is_closed = 0;

        $start_date_promotion = $promotion->getStartDatePromotion();
        $end_date_promotion = $promotion->getEndDatePromotion();

        $query = "UPDATE $this->table SET start_date_promotion = :start_date_promotion, end_date_promotion = :end_date_promotion, is_closed = :is_closed WHERE $this->table.id = :id";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":start_date_promotion", $start_date_promotion);
        $stmt->bindParam(":end_date_promotion", $end_date_promotion);
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

    public function insertProductInPromotion($promotion, $products)
    {
        try {

            $this->connection->beginTransaction();
            $id_promotion = $promotion;

            foreach ($products as $product) {
                $id_product = $product;

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
            return false;
        }
    }

    public function getAllProductPromotion()
    {
        $query = "SELECT * FROM $this->tableassoc";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteProductPromotion($promotion, $products)
    {
        $id_promotion = $promotion;
        $id_product = $products;

        $query = "DELETE FROM $this->tableassoc WHERE id_promotion = :id_promotion AND id_product = :id_product";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id_promotion", $id_promotion);
        $stmt->bindParam(":id_product", $id_product);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }
}
