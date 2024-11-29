<?php
namespace Pi\Visgo\Model;

use JsonSerializable;

class Address implements JsonSerializable
{

    private $id;
    private $state;
    private $city;
    private $neighborhood;
    private $number;
    private $street;
    private $cep;


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
    public function getState()
    {
        return $this->state;
    }

    /**
     * @param mixed $state 
     * @return self
     */
    public function setState($state): self
    {
        $this->state = $state;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * @param mixed $city 
     * @return self
     */
    public function setCity($city): self
    {
        $this->city = $city;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getNeighborhood()
    {
        return $this->neighborhood;
    }

    /**
     * @param mixed $neighborhood 
     * @return self
     */
    public function setNeighborhood($neighborhood): self
    {
        $this->neighborhood = $neighborhood;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getNumber()
    {
        return $this->number;
    }

    /**
     * @param mixed $number 
     * @return self
     */
    public function setNumber($number): self
    {
        $this->number = $number;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getStreet()
    {
        return $this->street;
    }

    /**
     * @param mixed $street 
     * @return self
     */
    public function setStreet($street): self
    {
        $this->street = $street;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getCep()
    {
        return $this->cep;
    }

    /**
     * @param mixed $cep 
     * @return self
     */
    public function setCep($cep): self
    {
        $this->cep = $cep;
        return $this;
    }

    public function jsonSerialize(): mixed
    {
        return [
            'id' => $this->getId(),
            'state' => $this->getState(),
            'city' => $this->getCity(),
            'neighborhood' => $this->getNeighborhood(),
            'number' => $this->getNumber(),
            'street' => $this->getStreet(),
            'cep' => $this->getCep()
        ];
    }
}
