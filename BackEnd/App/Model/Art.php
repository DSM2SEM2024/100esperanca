<?php

namespace Pi\Visgo\Model;
class Art
{

    private $id;
    private $name;
    private $description;
    private $characteristic;
    private $is_deleted = 0;


    public function setId($id): self
    {
        $this->id = $id;
        return $this;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }

    public function setDescription($description)
    {
        $this->description = $description;
        return $this;
    }

    public function setCharacteristic($characteristic)
    {
        $this->characteristic = $characteristic;
        return $this;
    }
    public function getName()
    {
        return $this->name;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function getCharacteristic()
    {
        return $this->characteristic;
    }


    public function getIsDeleted(){
        return $this->is_deleted;
    }

    public function setIsDeleted($is_deleted): self{
         $this->is_deleted = $is_deleted;
         return $this;
    }

}