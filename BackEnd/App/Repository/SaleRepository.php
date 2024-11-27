<?php
namespace Pi\Visgo\Repository;
use PDO;
Use Pi\Visgo\Model\Sale;


class SaleRepository{

  private PDO $connection;
  private string $table = "sale";
  private string $tableassoc = "sale_product";

  public function __construct(PDO $connection){
    $this->connection = $connection;
  }

  




}