<?php 
namespace Pi\Visgo\Repository;

use PDO;
use Pi\Visgo\Model\Order;

class OrderRepository{
    private $connection;
    private $table = "`order`";

    private $tableAssoc = "order_art";


    public function __construct(PDO $connection) {
        $this->connection = $connection;
    }


    public function createOrder(Order $order){
        $date_time_order = $order->getDate_Time_Order();
        $description = $order->getDescription();
        $is_finished = $order->getIsFinished();
        $id_user = $order->getIdUser();

        $query = "INSERT INTO $this->table (date_time_order, description, is_finished, id_user) VALUES (:date_time_order, :description, :is_finished, :id_user)";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":date_time_order", $date_time_order);
        $stmt->bindParam(":description", $description);
        $stmt->bindParam(":is_finished", $is_finished);

        $stmt->bindParam(":id_user", $id_user); 

        $executionCompleted = $stmt->execute();

        return $executionCompleted;

    }

    public function updateOrder($id, Order $order) {
        
        $id_user = $order->getIdUser();
        if (empty($id_user)) {
            throw new \Exception("O campo 'id_user' é obrigatório.");
        }
    
        $date_time_order = $order->getDate_Time_Order();
        $description = $order->getDescription();
        $is_finished = $order->getIsFinished();
    
        $query = "UPDATE $this->table SET date_time_order = :date_time_order, id_user = :id_user, description = :description, is_finished = :is_finished WHERE id = :id";
    
        $stmt = $this->connection->prepare($query);
    
        $stmt->bindParam(":date_time_order", $date_time_order);
        $stmt->bindParam(":description", $description);
        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":id_user", $id_user);
        $stmt->bindParam(":is_finished", $is_finished);
    
        try {
            $executionCompleted = $stmt->execute();
            return $executionCompleted;
        } catch (\PDOException $e) {
            throw new \Exception("Erro ao atualizar o pedido: " . $e->getMessage());
        }
    }
    

    public function getOrderById($id){
        $query = "SELECT * FROM $this->table WHERE id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id", $id, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getAllOrder(){
        $query = "SELECT * FROM $this->table";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function finishOrderById($id) {
        $is_finished = 1;

        $query = "UPDATE $this->table SET is_finished = :is_finished WHERE id = :id";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":is_finished", $is_finished);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }

    public function openOrderById($id) {
        $is_finished = 0;

        $query = "UPDATE $this->table SET is_finished = :is_finished WHERE id = :id";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":is_finished", $is_finished);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }

    public function getAllOrderArts() {
        $query = "SELECT * FROM $this->tableAssoc";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteArtFromOrder($orderId, $artId) {
        $query = "DELETE FROM $this->tableAssoc WHERE id_order = :id_order AND id_art = :id_art";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id_order", $orderId);
        $stmt->bindParam(":id_art", $artId);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }

    public function insertArtInOrder($orderId, $arts)
    {
        try {
            $this->connection->beginTransaction();
            
            $query = "INSERT INTO $this->tableAssoc (id_order, id_art) VALUES (:id_order, :id_art)";
            $stmt = $this->connection->prepare($query);
    
            foreach ($arts as $artId) {
                $stmt->bindParam(":id_order", $orderId);
                $stmt->bindParam(":id_art", $artId);
                if (!$stmt->execute()) {
                    throw new \Exception("Erro ao inserir arte no pedido");
                }
            }
    
            $this->connection->commit();
            return true;
    
        } catch (\Exception $e) {
            $this->connection->rollBack();
            return false;
        }
    }
    
    public function deleteOrderById($id){
        $query = "DELETE FROM $this->table WHERE id = :id";

        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id", $id);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }

}