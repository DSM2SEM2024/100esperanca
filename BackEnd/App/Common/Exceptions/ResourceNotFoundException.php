<?php
namespace Pi\Visgo\Common\Exceptions;

use Exception;

class ResourceNotFoundException extends Exception
{
    public function __construct($resourceType, $resourceId, $code = 0, Exception $previous = null)
    {
        $message = "Resource $resourceType with Id $resourceId was not found.";
        parent::__construct($message, $code, $previous);
    }

    public function __toString(): string
    {
        return __CLASS__ . ": [{$this->code}]: {$this->message}\n";
    }
}
