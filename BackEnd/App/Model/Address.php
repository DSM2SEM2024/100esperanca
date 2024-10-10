<?php
namespace Pi\Visgo\Model;

class Address{
    
    private $id;
    private $state;
    private $city;
    private $neighborhood;
    private $number;
    private $street;
    private $cep;

    public function __construct($id, $state, $city, $neighborhood, $number, $street, $cep){
        $this->id = $id;
        $this->state = $state;
        $this->city = $city;
        $this->neighborhood = $neighborhood;
        $this->number = $number;
        $this->street = $street;
        $this->cep = $cep;
    }

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
}