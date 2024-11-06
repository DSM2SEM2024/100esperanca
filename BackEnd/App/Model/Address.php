<?php
namespace Pi\Visgo\Model;

use JsonSerializable;

class Address implements JsonSerializable {
    
    private $id;
    private $state;
    private $city;
    private $neighborhood;
    private $number;
    private $street;
    private $cep;

    public function getId() {
        return $this->id;
    }

    public function getState() {
        return $this->state;
    }

    public function getCity() {
        return $this->city;
    }

    public function getNeighborhood() {
        return $this->neighborhood;
    }

    public function getNumber(){
        return $this->number;
    }

    public function getStreet() {
        return $this->street;
    }

    public function getCep() {
        return $this->cep;
    }

    public function setId($id) {
        $this->id = $id;
    }

    public function setState($state) {
        $this->state = $state;
    }

    public function setCity($city) {
        $this->city = $city;
    }

    public function setNeighborhood($neighborhood) {
        $this->neighborhood = $neighborhood;
    }

    public function setNumber($number){
        $this->number = $number;
    }

    public function setStreet($street) {
        $this->street = $street;
    }

    public function setCep($cep) {
        $this->cep = $cep;
    }

    public function jsonSerialize(): mixed {
        return [
            'state' => $this->getState(),
            'city' => $this->getCity(),
            'neighborhood' => $this->getNeighborhood(),
            'number' => $this->getNumber(),
            'street' => $this->getStreet(),
            'cep' => $this->getCep()
        ];
    }
}