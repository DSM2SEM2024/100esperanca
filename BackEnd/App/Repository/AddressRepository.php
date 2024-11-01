<?php 
namespace Pi\Visgo\Repository;

use Pi\Visgo\Model\address;
use PDO;

class AddressRepository{
    
    private $connection;
    private $table = "address";

    public function __construct(PDO $connection) {
        $this->connection = $connection;
    }

    public function createAddress(Address $address) {
        $state = $address->getState();
        $city = $address->getCity();
        $neighborhood = $address->getNeighborhood();
        $number = $address->getNumber();
        $street = $address->getStreet();
        $cep = $address->getCep();

        $query = "INSERT INTO $this->table (state, city, neighborhood, number, street, cep) VALUES (:state, :city, :neighborhood, :number, :street, :cep)";
    
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

    public function updateAddress($id, Address $address) {
        $state = $address->getState();
        $city = $address->getCity();
        $neighborhood = $address->getNeighborhood();
        $number = $address->getNumber();
        $street = $address->getStreet();
        $cep = $address->getCep();

        $query = "UPDATE $this->table SET state = :state, city = :city, neighborhood = :neighborhood; number = :number, street = :street, cep = :cep WHERE address.id = :id";

        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":state", $state);
        $stmt->bindParam(":city", $city);
        $stmt->bindParam(":neighborhood", $neighborhood);
        $stmt->bindParam(":number", $number);
        $stmt->bindParam(":street", $street);
        $stmt->bindParam(":cep", $cep);
        
        $executionCompleted = $stmt->execute();

         //Talvez implementação de Log.
        //Algo como: "Gerar um Log de Atualizar o produto sempre que $executionCompleted"

        return $executionCompleted;
    }

    public function getAddressById ($id) {
        $query = "SELECT * FROM $this->table WHERE $this->table.id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindParam(":id", $id, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_OBJ);
    }

    public function getAllAddress() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->connection->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteByIdAddress($id) {
        //Lembrete para mim próprio: dúvida neste address que mudou de cor pra mim, no projeto modelo ele estava normal.
        
        $query = "DELETE FROM $this->table WHERE $this->table.id = :id";
        $stmt = $this->connection->prepare($query);

        $stmt->bindParam(":id", $id);

        $executionCompleted = $stmt->execute();
        
        return $executionCompleted;
    }

}