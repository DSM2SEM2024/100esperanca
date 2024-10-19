<?php

namespace Pi\Visgo\Model;
Class Art{

    private $characteristic;
    private $description;
    private $name;
    private $id;


    public function __construct($characteristic, $description, $name) {

        $this->characteristic = $characteristic;
        $this->description = $description;
        $this->name = $name;

    }

    public function getId(){
        return $this->id;
    }

    public function getCharacteristic(){
        return $this->characteristic;
    }

    public function getDescription(){
        return $this->description;
    }

    public function getName(){
        return $this->name;
    }

    public function setCharacteristic($characteristic){
        return $this->characteristic = $characteristic;
    }

    public function setDescription($description){
        return $this->description = $description;
    }

    public function setName($name){
        return $this->name = $name;
    }

    

}