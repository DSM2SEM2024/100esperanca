<?php

namespace Pi\Visgo\Model;

class Order
{

    private $id;
    private $dateTimeOrder;
    private $id_user;
    private $description;
    private $is_finished;

    public function setId($id): self
    {
        $this->id = $id;
        return $this;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getIdUser()
    {
        return $this->id_user;
    }

    public function getDateTimeOrder()
    {
        return $this->dateTimeOrder;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDateTimeOrder($date_time_order)
    {
        $this->dateTimeOrder = $date_time_order;
        return $this;
    }
    public function setDescription($description)
    {
        $this->description = $description;
        return $this;
    }

    public function setIsFinished($is_finished)
    {
        $this->is_finished = $is_finished;
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
}

