<?php
namespace Pi\Visgo\Model;
class Sale{

    private $id_user;
    private $date_time_sale;
    private $is_finished = 0;
    private $id;

    public function getId()
    {
        return $this->id;
    }

    public function getIdUser()
    {
        return $this->id_user;
    }

    public function getDateTimeSale()
    {
        return $this->date_time_sale;
    }

    public function getIsFinished()
    {
        return $this->is_finished;
    }

    public function setIdUser($id_user)
    {
        $this->id_user = $id_user;
        return $this;
    }

    public function setDateTimeSale($date_time_sale)
    {
        $this->date_time_sale = $date_time_sale;
        return $this;
    }

    public function setIsFinished($is_finished)
    {
        $this->is_finished = $is_finished;
        return $this;
    }

    public function setId($id)
    {
      $this->id = $id;
      return $this;
    }

}