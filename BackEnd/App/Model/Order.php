<?php

namespace Pi\Visgo\Model;

class Order{

    private $date_time_order;
    private $id;
    private $description;

    public function __construct($date_time_order, $description) {
        $this->date_time_order = $date_time_order;   
        $this->description = $$description;
    
    }

    public function getId(){
        return $this->id;
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


}

