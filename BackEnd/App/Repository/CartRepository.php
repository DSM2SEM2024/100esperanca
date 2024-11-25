<?php

namespace Pi\Visgo\Repository;

use Pi\Visgo\Model\Cart;
use Pi\Visgo\Database\Connection;
use PDO;
use PDOException;

class CartRepository
{

    private $connection;
    private $table = "cart";
    private $tableassoc = "cart_product";

    public function __construct($drive)
    {
        $this->connection = Connection::getInstance($drive);
    }

    public function createCart(Cart $cart): bool
    {

        $id_user = $cart->getIdUser();

        $query = "INSERT INTO $this->table (id_user) VALUES (:id_user)";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id_user", $id_user);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;

    }

    public function deleteCart($id): bool
    {

        $is_deleted = 1;

        $query = "UPDATE $this->table SET is_deleted = :is_deleted WHERE $this->table.id = :id";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);
        $stmt->bindParam(":is_deleted", $is_deleted);

        $executionCompleted = $stmt->execute();

        return $executionCompleted;

    }

    public function addProductinCart($id_cart, $id_products): bool
    {

        try {

            $this->connection->beginTransaction();

            foreach ($id_products as $ids) {

                $id_product = $ids;
                echo ($ids);
                echo ($id_cart);

                $query = "INSERT INTO $this->tableassoc (id_cart, id_product) VALUES (:id_cart, :id_product)";

                $stmt = $this->connection->prepare($query);

                $stmt->bindParam(":id_cart", $id_cart);
                $stmt->bindParam(":id_product", $id_product);

                $executionCompleted = $stmt->execute();
            }

            $this->connection->commit();

            return true;

        } catch (PDOException $e) {
            $this->connection->rollBack();
            return false;
        }
    }

    public function getAllCarts(): array
    {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getAllCartsAssoc(): array
    {
        $query = "SELECT * FROM $this->tableassoc";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getCartById($id): object
    {
        $query = "SELECT * FROM $this->table WHERE $this->table.id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam("id", $id, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_OBJ);
    }

    public function getProductInCarts($id_product): array
    {
        $query = "SELECT * FROM $this->tableassoc WHERE id_product = :id_product";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id_product", $id_product);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteProductInCart($id_cart, $id_product): bool
    {
        $query = "DELETE FROM $this->tableassoc WHERE id_product = :id_product AND id_cart = :id_cart";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id_product", $id_product);
        $stmt->bindParam(":id", $id_cart);

        return $stmt->execute();
    }


}