<?php
namespace Pi\Visgo\Common;

class Validator {

    private static $comprimentoNomeArt = 3;
    private static $comprimentoDescricaoArt = 3;
    private static $comprimentoDescricaoOrder = 2;

    public static function validationArt($data) {
        $validNome = self::artNameValidation($data->name);
        $validDescricao = self::artDescriptionValidation($data->description);
        $validCaracteristica = self::artCharacteristicValidation($data->characteristic);

        $validations = [$validNome, $validDescricao, $validCaracteristica];

        foreach ($validations as $result) {
            if (is_array($result)) {
                ProblemAndFiledError::addFieldsWithError($result);
            }
        }

        return empty(ProblemAndFiledError::getFieldsError());
    }

    public static function validationOrder($data) {
        $validDateTime = self::orderDateTimeValidation($data->date_time_order);
        $validDescricao = self::orderDescriptionValidation($data->description);

        $validations = [$validDateTime, $validDescricao];

        foreach ($validations as $result) {
            if (is_array($result)) {
                ProblemAndFiledError::addFieldsWithError($result);
            }
        }

        return empty(ProblemAndFiledError::getFieldsError());
    }

    private static function artNameValidation($name) {
        if (strlen(trim($name)) < self::$comprimentoNomeArt) {
            return [
                "field" => "Nome",
                "message" => "Nome da arte deve ter no mínimo " . self::$comprimentoNomeArt . " caracteres"
            ];
        }
        return true;
    }

    private static function artDescriptionValidation($description) {
        if (strlen(trim($description)) < self::$comprimentoDescricaoArt) {
            return [
                "field" => "Descrição",
                "message" => "Descrição da arte deve ter no mínimo " . self::$comprimentoDescricaoArt . " caracteres"
            ];
        }
        return true;
    }

    private static function artCharacteristicValidation($characteristic) {
        if (empty(trim($characteristic))) {
            return [
                "field" => "Característica",
                "message" => "A característica da arte é obrigatória"
            ];
        }
        return true;
    }

    private static function orderDateTimeValidation($dateTime) {
        if (empty(trim($dateTime))) {
            return [
                "field" => "Data e Hora do Pedido",
                "message" => "A data e hora do pedido são obrigatórias"
            ];
        }

        return true;
    }

    private static function orderDescriptionValidation($description) {
        if (strlen(trim($description)) < self::$comprimentoDescricaoOrder) {
            return [
                "field" => "Descrição",
                "message" => "Descrição do pedido deve ter no mínimo " . self::$comprimentoDescricaoOrder . " caracteres"
            ];
        }
        return true;
    }
}
