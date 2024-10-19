<?php
namespace Pi\Visgo\Common;

final class ResponseAssemblerSuccess {
    
    public static function response($statusCode, $result) {

        http_response_code($statusCode);

        echo json_encode([
            "status" => true,
            "message" => "Requisição realizada e concluída com sucesso",
            "data" => $result
        ]) . "\n"; 
    }

    public static function responseDelete($statusCode) {

        http_response_code($statusCode);

        echo json_encode([
            "status" => true,
            "message" => "Registro excluído com sucesso!"
        ]) . "\n"; 
    }

}