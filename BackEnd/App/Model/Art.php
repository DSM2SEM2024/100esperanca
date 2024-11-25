<?php

namespace Pi\Visgo\Model;
class Art
{

    private $id;
    private $name;
    private $description;
    private $characteristic;


    public function setId($id): self
    {
        $this->id = $id;
        return $this;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getCharacteristic()
    {
        return $this->characteristic;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setCharacteristic($characteristic)
    {
        return $this->characteristic = $characteristic;
    }

    public function setDescription($description)
    {
        return $this->description = $description;
    }

    public function setName($name)
    {
        return $this->name = $name;
    }



}