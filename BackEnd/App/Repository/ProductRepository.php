<?php
namespace Pi\Visgo\Repository;

use PDO;
use Pi\Visgo\Common\Exceptions\ResourceNotFoundException;
use Pi\Visgo\Database\Connection;
use Pi\Visgo\Model\Product;

class ProductRepository
{

    private PDO $connection;
    private string $table = "product";

    private string $tableassoc = "product_images";

    public function __construct($drive)
    {
        $this->connection = Connection::getInstance($drive);
    }

    public function createProduct(Product $product): bool
    {
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

    public function reciveImage(int $product_id, string $image_path): bool 
    {
        if ($product_id <= 0) {
            return false;
        }
    
        $query = "INSERT INTO $this->tableassoc (product_id, image_path) VALUES (:product_id, :image_path)";
        
        $stmt = $this->connection->prepare($query);
    
        $stmt->bindParam(":product_id", $product_id, PDO::PARAM_INT);
        $stmt->bindParam(":image_path", $image_path, PDO::PARAM_STR);
        
        return $stmt->execute();
    }
    

    public function getAllProducts(): array
    {
        $query = "SELECT * FROM $this->table";

        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getAllImage(): array
{
    $query = "SELECT * FROM product_images";

    $stmt = $this->connection->prepare($query);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}


    public function getProductById(int $idProduct): object
    {
        $query = "SELECT * FROM $this->table WHERE $this->table.id = :idProduct";

        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":idProduct", $idProduct, PDO::PARAM_INT);

        $stmt->execute();

        $result = $stmt->fetch(PDO::FETCH_OBJ);

        if (!$result) {
            throw new ResourceNotFoundException("Product", $idProduct);
        }

        return $result;
    }

    public function getImageById(int $id): ?array 
    {
        $query = "SELECT * FROM $this->tableassoc WHERE id = :id";
        
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id", $id, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC) ?: null;
    }

    public function updateProduct(Product $product): bool
    {
        $query = "UPDATE $this->table SET name = :name, type_product = :type_product, cod_product = :cod_product, price = :price, id_art = :id_art WHERE id = :product_id";

        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":name", $product->getName(), PDO::PARAM_STR);
        $stmt->bindValue(":type_product", $product->getTypeProduct(), PDO::PARAM_STR);
        $stmt->bindValue(":price", $product->getPrice());
        $stmt->bindValue(":cod_product", $product->getCodProduct(), PDO::PARAM_STR);
        $stmt->bindValue(":id_art", $product->getArt()->getId(), PDO::PARAM_INT);
        $stmt->bindValue(":product_id", $product->getId(), PDO::PARAM_INT);
        return $stmt->execute();
    }

    public function updateImage(int $id, string $image_path): bool 
    {
        $query = "UPDATE $this->tableassoc SET image_path = :image_path WHERE id = :id";

        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id", $id, PDO::PARAM_INT);
        $stmt->bindParam(":image_path", $image_path, PDO::PARAM_STR);

        return $stmt->execute();
    }

    public function discontinueProduct(int $idProduct): bool
    {
        $query = "UPDATE $this->table SET is_discontinued = 1 WHERE id = :product_id";

        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":product_id", $idProduct, PDO::PARAM_INT);

        return $stmt->execute();
    }

    public function deleteImageById(int $id): bool {
        $query = "DELETE FROM $this->tableassoc WHERE id = :id";

        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id", $id, PDO::PARAM_INT);

        return $stmt->execute();
    }

}
