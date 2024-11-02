<?php
namespace Pi\Visgo\Repository;

use PDO;
use Pi\Visgo\Database\Connection;
use Pi\Visgo\Model\Product;

class ProductRepository {
    
    private $connection;
    private ArtRepository $repository;
    private $table;

    public function __construct($drive) {
        $this->connection = Connection::getInstance($drive);
    }

    public function createProduct(Product $product) {
        $name = $product->getName();
        $typeProduct = $product->getTypeProduct();
        $codProduct = $product->getCodProduct();
        $price = $product->getPrice();
        $art = $product->getArt()->getId();

        $query = "INSERT INTO $this->table(name, type_product, cod_product, price, id_art) VALUES(:name, :type_product, :cod_product, :price, :id_art)";

        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":name", $name, PDO::PARAM_STR);
        $stmt->bindValue(":type_product", $typeProduct, PDO::PARAM_STR);
        $stmt->bindValue(":cod_product", $codProduct, PDO::PARAM_STR);
        $stmt->bindValue(":price", $price);
        $stmt->bindValue(":id_art", $art, PDO::PARAM_INT);

        $result = $stmt->execute();

        return $result;
    }
}
