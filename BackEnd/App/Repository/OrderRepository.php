<?php
namespace Pi\Visgo\Repository;

use PDO;
use PDOException;
use Pi\Visgo\Database\Connection;
use Pi\Visgo\Model\Order;

class OrderRepository
{
    private PDO $connection;
    private string $table = "`order`";

    private string $tableAssoc = "order_art";


    public function __construct($drive)
    {
        $this->connection = Connection::getInstance($drive);
    }


    public function createOrder(Order $order)
    {
        $dateTimeOrder = $order->getDateTimeOrder();
        $description = $order->getDescription();
        $isFinished = $order->getIsFinished();
        $idUser = $order->getIdUser();

        $query = "INSERT INTO $this->table (date_time_order, description, is_finished, id_user) VALUES (:date_time_order, :description, :is_finished, :id_user)";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":date_time_order", $dateTimeOrder);
        $stmt->bindParam(":description", $description);
        $stmt->bindParam(":is_finished", $isFinished);

        $stmt->bindParam(":id_user", $idUser);

        $executionCompleted = $stmt->execute();

        if ($executionCompleted) 
        {
            return $this->connection->lastInsertId();
        }

            return false;
    }


    public function updateOrder($id, Order $order)
    {

        $id_user = $order->getIdUser();
        if (empty($id_user)) {
            throw new \Exception("O campo 'id_user' é obrigatório.");
        }

        $date_time_order = $order->getDateTimeOrder();
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
        } catch (PDOException $e) {
            throw new PDOException("Erro ao atualizar o pedido: " . $e->getMessage());
        }
    }

    public function getOrderById($id): mixed
    {
        $query = "SELECT * FROM $this->table WHERE id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id", $id, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getAllOrder()
    {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function finishOrderById($id)
    {
        $is_finished = 1;

        $query = "UPDATE $this->table SET is_finished = :is_finished WHERE $this->table.id = :id";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":is_finished", $is_finished);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }

    public function openOrderById($id)
    {
        $is_finished = 0;

        $query = "UPDATE $this->table SET is_finished = :is_finished WHERE $this->table.id = :id";
        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":is_finished", $is_finished);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }

    public function getAllOrderArts()
    {
        $query = "SELECT * FROM $this->tableAssoc";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteArtFromOrder($order, $arts)
    {
        try {
            $query = "DELETE FROM $this->tableAssoc WHERE id_order = :id_order AND id_art = :id_art";
            $stmt = $this->connection->prepare($query);

            $stmt->bindParam(":id_order", $order);
            $stmt->bindParam(":id_art", $arts);

            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return true;
            }

            return false;
        } catch (PDOException $e) {
            throw new PDOException("Erro ao remover arte: " . $e->getMessage());
        }
    }

    public function insertArtInOrder($order, $arts)
    {
        try {
            $this->connection->beginTransaction();
            
            $id_order = $order;
    
            $query = "INSERT INTO $this->tableAssoc (id_order, id_art) VALUES (:id_order, :id_art)";
            $stmt = $this->connection->prepare($query);
    
            if (!empty($arts) && is_array($arts)) {
                foreach ($arts as $id_art) {
                    $stmt->bindParam(":id_order", $id_order);
                    $stmt->bindParam(":id_art", $id_art);
                    
                    if (!$stmt->execute()) {
                        throw new PDOException("Erro ao inserir arte no pedido.");
                    }
                }
            }
    
            $this->connection->commit();
            return true;
        } catch (PDOException $e) {
            $this->connection->rollBack();
            throw new PDOException($e->getMessage());
        }
    }




    public function deleteOrderById($id)
    {
        $query = "DELETE FROM $this->table WHERE id = :id";

        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id", $id);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;
    }

}