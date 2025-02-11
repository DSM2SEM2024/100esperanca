<?php
namespace Pi\Visgo\Database;

use ErrorException;
use PDO;
use PDOException;

class Connection {
    
    private static $instance = null;
    private $drive;
    private $connection;
    private $path = __DIR__ . '/pi-visgo.db';
    private $dns = 'mysql:host=216.172.172.207;dbname=faust537_pi-4';
    private $usuario = 'faust537_pi-4';
    private $senha = 'faust537_pi-4';


    private function __construct($drive) {
        $this->drive = $drive;

        if (!file_exists($this->path)) {
    throw new ErrorException("❌ O banco de dados SQLite não foi encontrado em: " . realpath($this->path));
}

        
        try {
            
            if ($this->drive === 'sqlite') {

                $dsn = "sqlite:{$this->path}";
                $this->connection = new PDO($dsn, null, null, [PDO::ATTR_PERSISTENT => true]);

            } elseif ($this->drive === 'mysql') {
                
                $this->connection = new PDO($this->dns, $this->usuario, $this->senha);
                
            } else {
                throw new ErrorException('Banco de dados não suportado!');
            }

            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        } catch (PDOException $e) {
            throw new ErrorException("❌ Erro na conexão: " . $e->getMessage());
        }
        
    }

    public static function getInstance($drive) {
        if (self::$instance === null) {
            self::$instance = new self($drive);
        }
    
        if (!self::$instance->connection) {
            throw new ErrorException('Falha ao obter conexão com o banco de dados.');
        }
    
        return self::$instance->connection;
    }
} 