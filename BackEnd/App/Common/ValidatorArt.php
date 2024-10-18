<?php
namespace Pi\Visgo\Common;

class ValidatorArt {

    private static $comprimentoNomeArt = 10;
    private static $comprimentoDescricaoArt = 20;

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
}
