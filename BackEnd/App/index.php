<?php
namespace Pi\Visgo;

require_once "../vendor/autoload.php";

use Pi\Visgo\Repository\ArtRepository;
use Pi\Visgo\Controller\ArtController;
use Pi\Visgo\Database\Connection;

header('Content-Type: application/json');

$connection = Connection::getInstance('sqlite');
$artRepository = new ArtRepository($connection);
$artController = new ArtController($artRepository);

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];


switch ($method) {


}
