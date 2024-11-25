<?php
namespace Pi\Visgo\Common;

use DateTime;
use DateTimeZone;

class DateTimeZoneCustom {

    public static function getCurrentDateTime() {

        $timezone = new DateTimeZone('America/Sao_Paulo');
        $date = new DateTime('now', $timezone);
        $currentDateTime = $date->format('Y-m-d H:i:s');

        return $currentDateTime;

    }

}