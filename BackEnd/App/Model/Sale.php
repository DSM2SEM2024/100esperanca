<?php
namespace Pi\Visgo\Model;
class Sale{

    private $id_user;
    private $date_time_sale;
    private $is_finished;
    private $id;

    public function __construct($id_user, $date_time_sale, $is_finished){

    $this->id_user = $id_user; 
    $this->date_time_sale = $date_time_sale;
    $this->is_finished = $is_finished;

    }

    public function getId(){
      return $this->id;
    }

    public function getUserId(){
      return $this->id_user;
    }

    public function getDateTimeSale(){
      return $this->date_time_sale;
    }

    public function getIsFinished(){
      return $this->is_finished;
    }

    public function setIdUser($id_user){
      $this->id_user = $id_user;
    }

    public function setDateTimeSale($date_time_sale){
      $this->date_time_sale = $date_time_sale;
    }

    public function setIsFinished($is_finished){
      $this->is_finished = $is_finished;
    }

}