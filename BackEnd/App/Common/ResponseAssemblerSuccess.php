<?php
namespace Pi\Visgo\Common;

use Pi\Visgo\Controller\PromotionController;
use Pi\Visgo\Controller\ArtController;

final class ResponseAssemblerSuccess {
    
    public static function response($statusCode, $result, $message) {

        $message = $message->

        http_response_code($statusCode);

        echo json_encode([
            "status" => true,
            "message" => $message,
            "data" => $result
        ]) . "\n"; 
    }

    public static function responseDelete($statusCode, $message) {

        http_response_code($statusCode);

        echo json_encode([
            "status" => true,
            "message" => $message,
        ]) . "\n"; 
    }

}