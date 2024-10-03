CREATE DATABASE IF NOT EXISTS loja_visgo_jaca;

USE loja_visgo_jaca;

CREATE TABLE IF NOT EXISTS role (
    id           INT PRIMARY KEY AUTO_INCREMENT,
    name         VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS address (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    street          VARCHAR(100),
    `number`          INT,
    neighborhood    VARCHAR(100),
    cep             VARCHAR(20),
    state           VARCHAR(50),
    city            VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS user (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    password        VARCHAR(255),
    email           VARCHAR(100),
    name            VARCHAR(100),
    id_role         INT,
    id_address      INT,
    FOREIGN KEY (id_role) REFERENCES role(id),
    FOREIGN KEY (id_address) REFERENCES address(id)
);

CREATE TABLE IF NOT EXISTS art (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    name            VARCHAR(100),
    description     TEXT,
    characteristic  VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `order` (
    id                  INT PRIMARY KEY AUTO_INCREMENT,
    date_time_order     DATETIME,
    id_user             INT,
    description         TEXT,
    FOREIGN KEY (id_user) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS order_art (
    id                  INT PRIMARY KEY AUTO_INCREMENT,
    id_order            INT,
    id_art              INT,
    FOREIGN KEY (id_order) REFERENCES `order`(id),
    FOREIGN KEY (id_art) REFERENCES art(id)
);

CREATE TABLE IF NOT EXISTS product (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    id_art          INT,
    type_product    VARCHAR(50),
    cod_product     VARCHAR(255),
    price           DECIMAL(10, 2),
    name            VARCHAR(100),
    FOREIGN KEY (id_art) REFERENCES art(id)
);

CREATE TABLE IF NOT EXISTS promotion (
    id                      INT PRIMARY KEY AUTO_INCREMENT,
    start_date_promotion    DATETIME,
    end_date_promotion      DATETIME
);

CREATE TABLE IF NOT EXISTS product_promotion (
    id                      INT PRIMARY KEY AUTO_INCREMENT,
    id_product              INT,
    id_promotion            INT,
    FOREIGN KEY (id_product) REFERENCES product(id),
    FOREIGN KEY (id_promotion) REFERENCES promotion(id)
);

CREATE TABLE IF NOT EXISTS cart (
    id                      INT PRIMARY KEY AUTO_INCREMENT,
    id_user                 INT,
    FOREIGN KEY (id_user) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS cart_product (
    id                      INT PRIMARY KEY AUTO_INCREMENT,
    id_cart                 INT,
    id_product              INT,
    FOREIGN KEY (id_cart) REFERENCES cart(id),
    FOREIGN KEY (id_product) REFERENCES product(id)
);

CREATE TABLE IF NOT EXISTS sale (
    id                      INT PRIMARY KEY AUTO_INCREMENT,
    id_user                 INT,
    date_time_sale          DATETIME,
    FOREIGN KEY (id_user) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS sale_product (
    id                      INT PRIMARY KEY AUTO_INCREMENT,
    id_sale                 INT,
    id_product              INT,
    FOREIGN KEY (id_sale) REFERENCES sale(id),
    FOREIGN KEY (id_product) REFERENCES product(id)
);