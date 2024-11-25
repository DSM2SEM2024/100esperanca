<?php

namespace Pi\Visgo\Model;

class Cart {

    private $id;
    private $id_user;
    private $is_deleted;

    public function __construct() {

    }

    public function getId(){
        return $this->id;
    }

    public function getIdUser(){
        return $this->id_user;
    }

    public function setIdUser($id_user){
        return $this->id_user = $id_user;
    }

    public function getIsDeleted(){
        return $this->is_deleted;
    }

    public function setIsDeleted($is_deleted){
        return $this->is_deleted = $is_deleted;
    }

}