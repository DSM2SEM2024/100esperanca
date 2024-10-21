<?php

namespace Pi\Visgo\Model;

class Order{

    private $date;
    private $id;
    private $description;

    public function __construct($date, $description) {
        $this->date = $date;   
        $this->description = $$description;
    
    }

}

