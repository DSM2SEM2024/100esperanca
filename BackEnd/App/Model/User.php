<?php
namespace Pi\Visgo\Model;

use JsonSerializable;
use Pi\Visgo\Model\Address;

class User implements JsonSerializable {

    private $id;
    private $name;
    private $email;
    private $password;
    private $role;
    private Address $address;


    /**
     * Get the value of id
     *
     * @return int
     */
    public function getId(): int {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @param int $id
     * @return self
     */
    public function setId(int $id): self {
        $this->id = $id;
        return $this;
    }

    /**
     * Get the value of name
     *
     * @return string
     */
    public function getName(): string {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @param string $name
     * @return self
     */
    public function setName(string $name): self {
        $this->name = $name;
        return $this;
    }

    /**
     * Get the value of email
     *
     * @return string
     */
    public function getEmail(): string {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @param string $email
     * @return self
     */
    public function setEmail(string $email): self {
        $this->email = $email;
        return $this;
    }

    /**
     * Get the value of password
     *
     * @return string
     */
    public function getPassword(): string {
        return $this->password;
    }

    /**
     * Set the value of password
     *
     * @param string $password
     * @return self
     */
    public function setPassword(string $password): self {
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
        $this->password = $hashedPassword;
        return $this;
    }

    /**
     * Get the value of role
     *
     * @return string
     */
    public function getRole(): string {
        return $this->role;
    }

    /**
     * Set the value of role
     *
     * @param string $role
     * @return self
     */
    public function setRole(string $role): self {
        $this->role = $role;
        return $this;
    }

    /**
     * Get the value of address
     *
     * @return Address
     */
    public function getAddress(): Address {
        return $this->address;
    }

    /**
     * Set the value of address
     *
     * @param Address $address
     * @return self
     */
    public function setAddress(Address $address): self {
        $this->address = $address;
        return $this;
    }

    public function jsonSerialize(): mixed {
        return [
            'id' => $this->getId(),
            'name' => $this->getName(),
            'email' => $this->getEmail(),
            'address' => $this->getAddress()
        ];
    }

}
