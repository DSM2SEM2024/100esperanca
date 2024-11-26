<?php
namespace Pi\Visgo\Common\Exceptions;

use Exception;

class ErrorCreatingEntityException extends Exception
{
    public function __construct($resourceType, $code = 0, Exception $previous = null)
    {
        $message = "Erro ao criar $resourceType";
        parent::__construct($message, $code, $previous);
    }

    public function __toString(): string
    {
        return __CLASS__ . ": [{$this->code}]: {$this->message}\n";
    }
}
