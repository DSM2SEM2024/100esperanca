<?php
namespace Pi\Visgo\Common;


use Exception;
use Pi\Visgo\Common\Responses\ResponseAssemblerError;
use Pi\Visgo\Common\DateTimeZoneCustom;
use Pi\Visgo\Common\Responses\ProblemAndFiledError;

class Validator
{

    public static function validatorCurrentDate($date)
    {

        $currentDateTime = DateTimeZoneCustom::getCurrentDateTime();

        if (!($date > $currentDateTime)) {
            ResponseAssemblerError::response(404, "A data não pode ser antecedente a data atual");
            throw new Exception("Data não pode ser antecedente a data atual");
        }

    }

    public static function validatorRepetedValuesInArray($data): bool
    {

        $count = array_count_values($data);

        foreach ($count as $values => $quantify) {

            if ($quantify > 1) {
                return true;
            }

        }

        return false;

    }

    public static function validatorObjectInput(object $data): array
    {
        $message = " é campo obrigatório";
        foreach ($data as $key => $value) {
            if (!self::isValidValue($value)) {
                ProblemAndFiledError::addFieldsWithError(['field' => $key, 'message' => $key . $message]);
            }
        }

        return ProblemAndFiledError::getFieldsError();
    }
    private static function isValidValue($value): bool
    {
        return is_string($value) && !self::isEmptyString($value) || self::isIntOrFloat($value);
    }
    private static function isEmptyString($value): bool
    {
        return empty(trim($value));
    }
    private static function isIntOrFloat($value): bool
    {
        return is_int($value) || is_float($value);
    }
}
