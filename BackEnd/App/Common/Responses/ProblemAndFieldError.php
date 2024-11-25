<?php

namespace Pi\Visgo\Common\Responses;

final class ProblemAndFieldError
{

    private static $fieldsError = array();


    public static function addFieldsWithError($field)
    {
        return ProblemAndFieldError::$fieldsError[$field["field"]] = $field["message"];
    }

    public static function getFieldsError(): array
    {
        return ProblemAndFieldError::$fieldsError;
    }
}


