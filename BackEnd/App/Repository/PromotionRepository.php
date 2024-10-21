<?php
namespace Pi\Visgo\Repository;

use Pi\Visgo\Model\Promotion;
use Pi\Visgo\Database\Connection;
use PDO;
use PDORow;

class PromotionRepository {

    private $connection;
    private $table = "promotion";

    public function __construct($drive){
        $this->connection = Connection::getInstance($drive);
    }

    public function createPromotion(Promotion $promotion) {
        $start_date_promotion = $promotion->getStartDatePromotion();
        $end_date_promotion = $promotion->getEndDatePromotion();
        $cod_promotion = $promotion->getCodPromotion();

        $query = "INSERT INTO $this->table (star_date_promotion, end_date_promotion, cod_promotion) VALUES (:start_date_promotion, :end_date_promotion, :cod_promotion)";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":star_date_promotion", $start_date_promotion);
        $stmt->bindParam(":end_date_promotion", $end_date_promotion);
        $stmt->bindParam(":cod_promotion", $cod_promotion);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;

    }

    public function updatePromotion($id, Promotion $promotion) {
        $start_date_promotion = $promotion->getStartDatePromotion();
        $end_date_promotion = $promotion->getEndDatePromotion();
        $cod_promotion = $promotion->getCodPromotion();

        $query = "UPDATE $this->table SET start_date_promotion = :start_date_promotion, end_date_promotion = :end_date_promotion, cod_promotion = :cod_promotion WHERE $this->table.id = :id";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":star_date_promotion", $start_date_promotion);
        $stmt->bindParam(":end_date_promotion", $end_date_promotion);
        $stmt->bindParam(":cod_promotion", $cod_promotion);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }

    public function searchByIdPromotion($id) {
        $query = "SELECT * FROM $this->table WHERE $this->table.id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam("id", $id, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getAllPromotion() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteByIdPromotion($id) {
        $arraySearch = $this->searchByIdPromotion($id);

        $query = "DELETE FROM $this->table WHERE $this->table.id = :id";
        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);

        $executionCompleted = $stmt->execute();
        
        return $executionCompleted;
        
    }

    public function insertProductInPromotio($productsIds) {

    } 

}