<?php
namespace Pi\Visgo\Repository;
use PDO;
Use Pi\Visgo\Model\Sale;


class SaleRepository{

  private $connection;
  private $table = "sale";
  private $tableassoc = "sale_product";

  public function __construct(PDO $connection){
    $this->connection = $connection;
  }

  




}