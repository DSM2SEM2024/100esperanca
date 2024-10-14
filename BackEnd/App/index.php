<?php
namespace Pi\Visgo;
require_once "../vendor/autoload.php";

use Pi\Visgo\Repository\RoleRepository;

header('Content-Type: application/json');

$roleRepository = new RoleRepository('sqlite');

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

switch ($uri) {
    case '/role':

        if ($method === 'GET') {
            $roleRepository->getAllRoles();
        }

        break;
    
    default:
        break;
}