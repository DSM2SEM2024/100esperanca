<?php
namespace Pi\Visgo\Model;

use Pi\Visgo\Model\Art;

class Product {
    
    private $id;
    private $name;
    private $image_path;
    private $typeProduct;
    private $codProduct;
    private $price;
    private $isDiscontinued;
    private Art $art;

    /**
     * Get the value of id
     * @return int
     */
    public function getId(): int {
        return $this->id;
    }

    /**
     * Set the value of id
     * @param int $id
     */
    public function setId(int $id): void {
        $this->id = $id;
    }

    public function getImagePath() :string  {
        return $this->image_path;
    }

    public function setImagePath($image_path) :void{
        $this->image_path = $image_path;
    }

    /**
     * Get the value of name
     * @return string
     */
    public function getName(): string {
        return $this->name;
    }

    /**
     * Set the value of name
     * @param string $name
     */
    public function setName(string $name): void {
        $this->name = $name;
    }

    /**
     * Get the value of typeProduct
     * @return string
     */
    public function getTypeProduct(): string {
        return $this->typeProduct;
    }

    /**
     * Set the value of typeProduct
     * @param string $typeProduct
     */
    public function setTypeProduct(string $typeProduct): void {
        $this->typeProduct = $typeProduct;
    }

    /**
     * Get the value of codProduct
     * @return string
     */
    public function getCodProduct(): string {
        return $this->codProduct;
    }

    /**
     * Set the value of codProduct
     * @param string $codProduct
     */
    public function setCodProduct(string $codProduct): void {
        $this->codProduct = $codProduct;
    }

    /**
     * Get the value of price
     * @return float
     */
    public function getPrice(): float {
        return $this->price;
    }

    /**
     * Set the value of price
     * @param float $price
     */
    public function setPrice(float $price): void {
        $this->price = $price;
    }

    /**
     * Get the value of isDiscontinued
     * @return int
     */
    public function getIsDiscontinued(): int {
        return $this->isDiscontinued;
    }

    /**
     * Set the value of isDiscontinued
     * @param int $isDiscontinued
     */
    public function setIsDiscontinued(int $isDiscontinued): void {
        $this->isDiscontinued = $isDiscontinued;
    }

    /**
     * Get the value of art
     * @return Art
     */
    public function getArt(): Art {
        return $this->art;
    }

    /**
     * Set the value of art
     * @param Art $art
     */
    public function setArt(Art $art): void {
        $this->art = $art;
    }
}
