<?php

namespace Pi\Visgo\RoleRepository;



class RoleRepository{

    private $connection;
    private $table = "role";

    public function __construct(Type $var = null) {
        $this->var = $var;
    }

}

