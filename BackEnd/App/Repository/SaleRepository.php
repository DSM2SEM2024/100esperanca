<?php
namespace Pi\Visgo\Repository;

use PDO;
Use Pi\Visgo\Model\Sale;
Use Pi\Visgo\Database\Connection;
use Pi\Visgo\Common\Exceptions\ResourceNotFoundException;
use PDOException;


class SaleRepository{

  private PDO $connection;
  private string $table = "sale";
  private string $tableassoc = "sale_product";

  public function __construct($drive)
  {
      $this->connection = Connection::getInstance($drive);
  }

  public function createSale(Sale $sale) 
  {

    $id_user = $sale->getIdUser();
    $date_time_sale = $sale->getDateTimeSale();

    if (empty($date_time_sale)) {
        $date_time_sale = date('Y-m-d H:i:s');
    }

    $query = "INSERT INTO $this->table (id_user, date_time_sale) VALUES (:id_user, :date_time_sale)";

    $stmt = $this->connection->prepare($query);

    $stmt->bindParam(':id_user', $id_user);
    $stmt->bindParam(':date_time_sale', $date_time_sale);

    $executionCompleted = $stmt->execute();

    if ($executionCompleted) 
    {
        return $this->connection->lastInsertId();
    }

        return false;
}



public function InsertSaleProduct($sale, $products) 
{

  try {
      $this->connection->beginTransaction();

      $id_sale = $sale;

      $query = "INSERT INTO $this->tableassoc (id_sale, id_product) VALUES (:id_sale, :id_product)";
      $stmt = $this->connection->prepare($query);

      if (!empty($products) && is_array($products)) {
          foreach ($products as $product) {  

              $stmt->bindParam(":id_sale", $id_sale);
              $stmt->bindParam(":id_product", $product);

              if (!$stmt->execute()) {
                  throw new PDOException("Erro ao inserir produto na venda.");
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



 public function updateSale($id, Sale $sale) 
 {

    $id_user = $sale->getIdUser();
    if (empty($id_user)) {
      throw new \Exception("O campo 'id_user' é obrigatório.");
  }

    $id_user = $sale->getIdUser();
    $date_time_sale = $sale->getDateTimeSale();
    $is_finished = $sale->getIsFinished();

    $query = "UPDATE $this->table SET id_user = :id_user, date_time_sale = :date_time_sale, is_finished = :is_finished WHERE id = :id";

    $stmt = $this->connection->prepare($query);

    $stmt->bindParam(":id_user", $id_user);
    $stmt->bindParam(":date_time_sale", $date_time_sale);
    $stmt->bindParam(":is_finished", $is_finished);
    $stmt->bindParam(":id", $id);

    $executionCompleted = $stmt->execute();

    return $executionCompleted;
}

public function IsFinishedSale($id) 
{
 
  $is_finished = 1;

  $query = "UPDATE $this->table SET is_finished = :is_finished WHERE id = :id";

  $stmt = $this->connection->prepare($query);

  $stmt->bindParam(":id", $id);
  $stmt->bindParam(":is_finished", $is_finished);

  $executionCompleted = $stmt->execute();

  return $executionCompleted;
}


  public function isNotFinishedSale($id)
  {
    
    $is_finished = 0;

    $query = "UPDATE $this->table SET is_finished = :is_finished WHERE $this->table.id = :id";  

    $stmt = $this->connection->prepare($query);

    $stmt->bindParam(":id", $id);
    $stmt->bindParam(":is_finished", $is_finished);

    $executionCompleted = $stmt->execute();

    return $executionCompleted;
  }


  public function getSaleById($id)
  {

    $query = "SELECT * FROM $this->table WHERE sale.id
     = :id";
    $stmt = $this->connection->prepare($query);
    $stmt->bindParam(":id", $id, PDO::PARAM_INT);
    $stmt->execute();

    return $stmt->fetch(PDO::FETCH_ASSOC);

  }

  public function getallSale(): array
  {

    $query = "SELECT * FROM $this->table";
    $stmt = $this->connection->prepare($query);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);

  }

  public function getAllProductsFromSale()
  {

    $query = "SELECT * FROM $this->tableassoc";
    $stmt = $this->connection->prepare($query);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function getProductFromSaleById($id_product)
  {

    $query = "SELECT *FROM $this->tableassoc WHERE id_product = :id_product";
    $stmt = $this->connection->prepare($query);
    $stmt->bindParam(":id_product", $id_product, PDO::PARAM_INT);
    $stmt->execute();

    return $stmt->fetch(PDO::FETCH_ASSOC);

  }  

}