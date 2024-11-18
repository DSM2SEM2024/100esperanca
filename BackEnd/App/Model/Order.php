<?php

namespace Pi\Visgo\Model;

class Order{

    private $date_time_order;
    private $id;

    private $id_user;
    private $description;
    private $is_finished;

    public function __construct($date_time_order, $description, $is_finished,$id_user) {
        $this->date_time_order = $date_time_order;   
        $this->description = $description;
        $this->is_finished = $is_finished;
        $this->id_user = $id_user;
    
    }

    public function getId(){
        return $this->id;
    }

    public function getIdUser(){
        return $this->id_user;
    }

    public function getDate_Time_Order(){
        return $this->date_time_order;
    }

    public function getDescription(){
        return $this->description;
    }

    public function setDate_Time_Order($date_time_order){
        $this->date_time_order = $date_time_order;
    }
    public function setdescription($description){
        $this->description = $description;
    }

    public function setIsFinished($is_finished){
        $this->is_finished = $is_finished;
    }

    public function getIsFinished(){
        return $this->is_finished;
        
    }

    public function setIdUser($id_user)
    {
        $this->id_user = $id_user;
    }


}

