<?php
namespace Pi\Visgo\Common;

final class ResponseAssemblerError {
    

    public static function response($statusCode, $fields, $message) {

        http_response_code($statusCode);

        echo json_encode([
            "status" => false,
            "message" => $message,
            "campos" => $fields
        ]) . "\n"; 
    }
    
    public static function responseDelete($statusCode) {

        http_response_code($statusCode);

        echo json_encode([
            "status" => false,
            "message" => "Error ao realizar a exclusão do registro!"
        ]) . "\n"; 
    }

}