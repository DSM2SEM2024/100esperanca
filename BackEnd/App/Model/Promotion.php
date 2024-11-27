<?php
namespace Pi\Visgo\Model;

use Exception;
use Pi\Visgo\Common\DateTimeZoneCustom;
use Pi\Visgo\Common\ResponseAssemblerError;
use Pi\Visgo\Common\Responses\Response;

class Promotion
{

    private $id;
    private $start_date_promotion;
    private $end_date_promotion;
    private $cod_promotion;
    private $is_closed;

    public function __construct()
    {
    }

    public function getId()
    {
        return $this->id;
    }

    public function getStartDatePromotion()
    {
        return $this->start_date_promotion;
    }

    public function setStartDatePromotion($start_date_promotion)
    {
        $currentDateTime = DateTimeZoneCustom::getCurrentDateTime();

        if (!($start_date_promotion > $currentDateTime)) {
            Response::error("A data de início não pode se antecedente a data atual.", 400);
            throw new Exception("A data de inicio não pode ser antecedente a data atual");
        }
        $this->start_date_promotion = $start_date_promotion;

        return $this;
    }

    public function getEndDatePromotion()
    {
        return $this->end_date_promotion;
    }

    public function setEndDatePromotion($end_date_promotion)
    {
        $start_date_promotion_validation =
            $this->getStartDatePromotion();

        if (!($end_date_promotion > $start_date_promotion_validation)) {
            Response::error("A data de término não pode se antecedente a data de início.", 400);
            throw new Exception("A data de inicio não pode ser antecedente a data atual");
        }
        $this->end_date_promotion = $end_date_promotion;

        return $this;
    }

    public function getCodPromotion()
    {
        return $this->cod_promotion;
    }

    public function setCodPromotion($cod_promotion)
    {
        $this->cod_promotion = $cod_promotion;
        return $this;
    }

    public function getIsClosed()
    {
        return $this->is_closed;
    }

    public function setIsClosed($is_closed)
    {
        $this->is_closed = $is_closed;
        return $this;
    }

}
