<?php 
namespace Pi\Visgo\Repository;

use Pi\Visgo\Model\Address;
use Pi\Visgo\Database\Connection;
use PDO;

class RepositoryAddress{
    
    private $connection;
    private $table = "Address";

    public function __construct()
    {
        $this->connection = Connection::getInstance();
    }

    public function createAddress(Address $Address) {
        $state = $Address->getState();
        $city = $Address->getCity();
        $neighborhood = $Address->getNeighborhood();
        $number = $Address->getNumber();
        $street = $Address->getStreet();
        $cep = $Address->getCep();

        $query = "INSERT INTO $this->table (state, city, neighborhood, number, street, cep) VALUES (:id, :state, :city, :neighborhood, :number, :street, :cep)";
    
        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":state", $state);
        $stmt->bindParam(":city", $city);
        $stmt->bindParam(":neighborhood", $neighborhood);
        $stmt->bindParam(":number", $number);
        $stmt->bindParam(":street", $street);
        $stmt->bindParam(":cep", $cep);

        $executionCompleted = $stmt->execute();

        //Talvez implementação de Log.
        //Algo como: "Gerar um Log de Criar produto sempre que $executionCompleted"

        return $executionCompleted;
    }

    public function updateAddress($id, Address $Address) {
        $state = $Address->getState();
        $city = $Address->getCity();
        $neighborhood = $Address->getNeighborhood();
        $number = $Address->getNumber();
        $street = $Address->getStreet();
        $cep = $Address->getCep();

        $query = "UPDATE $this->table SET state = :state, city = :city, neighborhood = :neighborhood; number = :number, street = :street, cep = :cep WHERE Address.id = :id";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":state", $state);
        $stmt->bindParam(":city", $city);
        $stmt->bindParam(":neighborhood", $neighborhood);
        $stmt->bindParam(":number", $number);
        $stmt->bindParam(":street", $street);
        $stmt->bindParam(":cep", $cep);
        
        $executionCompleted = $stmt->execute();

         //Talvez implementação de Log.
        //Algo como: "Gerar um Log de Atualizaer o produto sempre que $executionCompleted"

        return $executionCompleted;
    }

    public function searchByIdAddress ($id) {
        $query = "SELECT * FROM $this->table WHERE produto.id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id", $id, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getAllAddress() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteByIdProduto($id) {
        $arraySearch = $this->searchByIdAddress($id);

        //Lembrete para mim próprio: dúvida neste Address que mudou de cor pra mim, no projeto modelo ele estava normal.
        
        $query = "DELETE FROM Address WHERE Address.id = :id";
        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);

        $executionCompleted = $stmt->execute();
        
        return $executionCompleted;
    }

}