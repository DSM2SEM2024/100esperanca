<?php
namespace Pi\Visgo\Common\Responses;

final class Response
{
    
    private static function json($data, int $status): void
    {
        http_response_code($status);

        header('Content-Type: application/json');

        echo json_encode($data, JSON_PRETTY_PRINT);
        exit;
    }

    public static function notFound($message = 'Resource not found', $status = 404): void
    {
        self::json(['error' => $message], $status);
    }

    public static function error($data = [], $message = 'An error occurred', int $status = 400): void
    {
        self::json(['error' => $message, 'data' => $data], $status);
    }

    public static function success($data = [], $message = 'Operation successful', $status): void
    {
        self::json(['message' => $message, 'data' => $data], $status);
    }

    public static function noContent(): void
    {
        http_response_code(204);
        exit;
    }

}
