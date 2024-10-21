<?php
namespace Pi\Visgo\Model;

class Promotion {

    private $id;
    private $start_date_promotion;
    private $end_date_promotion;
    private $cod_promotion;

    public function __construct($start_date_promotion, $end_date_promotion, $cod_promotion) {
        $this->start_date_promotion = $start_date_promotion;
        $this->end_date_promotion = $end_date_promotion;
        $this->cod_promotion = $cod_promotion;
    }

    public function getId() {
        return $this->id;
    }

    public function getStartDatePromotion() {
        return $this->start_date_promotion;
    }

    public function setStartDatePromotion($start_date_promotion) {
        $this->start_date_promotion = $start_date_promotion;
    }

    public function getEndDatePromotion() {
        return $this->end_date_promotion;
    }

    public function setEndDatePromotion($end_date_promotion) {
        $this->end_date_promotion = $end_date_promotion;
    }

    public function getCodPromotion() {
        return $this->cod_promotion;
    }

    public function setCodPromotion($cod_promotion) {
        $this->cod_promotion = $cod_promotion;
    }
}
