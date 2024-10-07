<?php
namespace Pi\Visgo\Database;

class Connection {
    
    private static $instance = null;
    private $connection;
    private $dns = 'mysql:host=localhost;dbname=nome_do_banco';
    private $usuario = 'root';
    private $senha = 'root' ;


    private function __construct() {
        try {
            $this->connection = new PDO($this->dns, $this->usuario, $this->senha);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Falha na conexão: ' . $e->getMessage();        
    }

    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance->conn;
    }

}
