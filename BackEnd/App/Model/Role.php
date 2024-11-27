<?php
namespace Pi\Visgo\Model;

class Role
{

    private $id;
    private $name;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id 
     * @return self
     */
    public function setId($id): self
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name 
     * @return self
     */
    public function setName($name): self
    {
        $this->name = $name;
        return $this;
    }
}