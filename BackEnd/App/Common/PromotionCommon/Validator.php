<?php
namespace Pi\Visgo\Common;

use Pi\Visgo\Common\DateTimeZoneCustom;
use Pi\Visgo\Common\ProblemAndFiledError;
use Pi\Visgo\Model\Promotion;

class Validator {

    public static function validatorPromotion($data) {
        $validDateStart = Validator::promotionDateStartValidator($data->start);
        $validDateEnd = Validator::promotionDateEndValidator($data->end);

        $validations = [$validDateStart, $validDateEnd];

        foreach ($validations as $key => $result) {
            if (is_array($result)) {
                ProblemAndFiledError::addFieldsWithError($result);
            }
        }

        if (!empty(ProblemAndFiledError::getFieldsError())){
            return false;
        }

        return true;
    } 


    private static function promotionDateStartValidator($start){
        $problemsAndErrors = array();



    }

    private static function promotionDateEndValidator($end){

    }

}