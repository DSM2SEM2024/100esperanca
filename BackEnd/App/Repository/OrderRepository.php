<?php 
namespace Pi\Visgo\Repository;

use PDO;
use Pi\Visgo\Model\Order;

class OrderRepository{
    private $connection;
    private $table = "order";


    public function __construct(PDO $connection) {
        $this->connection = $connection;
    }


    public function createOrder(Order $order){
        $date_time_order = $order->getDate_Time_Order();
        $description = $order->getDescription();

        $query = "INSERT INTO $this->table (date_time_order, description) VALUES (:date_time_order, :description)";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":date_time_order", $date_time_order);
        $stmt->bindParam(":description", $description);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;

    }

    public function updateOrder($id, Order $order){
        $date_time_order = $order->getDate_Time_Order();
        $description = $order->getDescription();

        $query = "UPDATE $this->table SET date_time_order = :date_time_order, description = :description WHERE order.id = :order_id";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":date_time_order", $date_time_order);
        $stmt->bindParam(":description", $description);
        $stmt->bindParam(":order_id", $id);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;

    }

    public function getOrderById($id){
        $query = "SELECT * FROM $this->table WHERE order.id = :id";
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

    public function deleteOrderById($id){
        $query = "DELETE FROM order WHERE role.id = :id";
        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
        
    }

    public function artAndOrder($orderId, $artIds) {
        foreach ($artIds as $artId) {
            $query = "INSERT INTO order_art (order_id, art_id) VALUES (:order_id, :art_id)";

            $stmt = $this->connection->prepare($query);

            $stmt->bindParam(':order_id', $orderId);
            $stmt->bindParam(':art_id', $artId);
            $stmt->execute();
        }
    }
    


}