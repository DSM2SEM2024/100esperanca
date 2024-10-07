<?php

namespace Pi\visgo\Model;

class Role {

    private $id;
    private $name;

    public function __construct($id, $name) {
        $this->id = $id;
        $this->name = $name;

    }

public function getId() {
    return $this->id;
}

public function getName(){
    return $this->name;
}

public function setId(){
    $this->id = $id;
}

public function setName(){
    $this->name = $name;
}

}