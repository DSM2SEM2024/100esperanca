CREATE DATABASE IF NOT EXISTS loja_visgo_jaca;

-- DROP DATABASE loja_visgo_jaca;

USE loja_visgo_jaca;

CREATE TABLE IF NOT EXISTS role (
    id           INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name         VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS address (
    id                  INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    street              VARCHAR(100) NOT NULL,
    `number`            INT NOT NULL,
    neighborhood        VARCHAR(100) NOT NULL,
    cep                 VARCHAR(20) NOT NULL,
    state               VARCHAR(50) NOT NULL,
    city                VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS user (
    id              INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    password        VARCHAR(255) NOT NULL ,
    email           VARCHAR(100) NOT NULL ,
    name            VARCHAR(100),
    is_deleted      TINYINT(1) DEFAULT 0,
    CONSTRAINT check_is_deleted_user CHECK (is_deleted IN (0, 1))
);

CREATE TABLE IF NOT EXISTS user_address(
    id                  INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_user             INT NOT NULL,
    id_address          INT NOT NULL,
    CONSTRAINT fk_user_has_address FOREIGN KEY (id_user) REFERENCES user(id),
    CONSTRAINT fk_address FOREIGN KEY (id_address) REFERENCES address(id)
);

CREATE TABLE IF NOT EXISTS user_role(
    id              INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_user         INT NOT NULL,
    id_role         INT NOT NULL,
    CONSTRAINT fk_user_has_role FOREIGN KEY (id_user) REFERENCES user(id),
    CONSTRAINT fk_role FOREIGN KEY (id_role) REFERENCES role(id)
);

CREATE TABLE IF NOT EXISTS art (
    id              INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name            VARCHAR(100) NOT NULL ,
    description     TEXT,
    characteristic  VARCHAR(255),
    is_deleted      TINYINT(1) DEFAULT 0,
    CONSTRAINT check_is_deleted_art CHECK (is_deleted IN (0, 1))
);

CREATE TABLE IF NOT EXISTS `order` (
    id                  INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date_time_order     DATETIME NOT NULL,
    id_user             INT NOT NULL,
    description         TEXT,
    is_finished         TINYINT(1) DEFAULT 0,
    CONSTRAINT check_is_finished_order CHECK (is_finished IN (0, 1)),
    CONSTRAINT fk_user_has_order FOREIGN KEY (id_user) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS order_art (
    id                  INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_order            INT NOT NULL ,
    id_art              INT NOT NULL ,
    CONSTRAINT fk_order FOREIGN KEY (id_order) REFERENCES `order`(id),
    CONSTRAINT fk_art_in_order FOREIGN KEY (id_art) REFERENCES art(id)
);

CREATE TABLE IF NOT EXISTS product (
    id                      INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_art                  INT NOT NULL,
    type_product            VARCHAR(50) NOT NULL ,
    cod_product             VARCHAR(255) NOT NULL ,
    price                   DECIMAL(10, 2) NOT NULL ,
    name                    VARCHAR(100),
    is_discontinued         TINYINT(1) DEFAULT 0,
    CONSTRAINT check_is_discontinued_product CHECK (is_discontinued IN (0, 1)),
    CONSTRAINT fk_art_in_product FOREIGN KEY (id_art) REFERENCES art(id)
);

CREATE TABLE IF NOT EXISTS promotion (
    id                      INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cod_promotion           VARCHAR(100) NOT NULL,
    start_date_promotion    DATETIME NOT NULL,
    end_date_promotion      DATETIME NOT NULL,
    is_closed               TINYINT(1) DEFAULT 0,
    CONSTRAINT check_is_closed_promotion CHECK (is_closed IN (0, 1))
);

CREATE TABLE IF NOT EXISTS product_promotion (
    id                      INT PRIMARY KEY AUTO_INCREMENT,
    id_product              INT,
    id_promotion            INT,
    CONSTRAINT fk_product_in_promotion FOREIGN KEY (id_product) REFERENCES product(id),
    CONSTRAINT fk_promotion_has_product FOREIGN KEY (id_promotion) REFERENCES promotion(id)
);

CREATE TABLE IF NOT EXISTS cart (
    id                      INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_user                 INT NOT NULL,
    is_deleted              TINYINT(1) DEFAULT 0,
    CONSTRAINT check_is_deleted_cart CHECK (is_deleted IN (0, 1)),
    CONSTRAINT fk_user_has_cart FOREIGN KEY (id_user) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS cart_product (
    id                      INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_cart                 INT NOT NULL,
    id_product              INT NOT NULL,
    CONSTRAINT fk_cart_has_product FOREIGN KEY (id_cart) REFERENCES cart(id),
    CONSTRAINT fk_product_in_cart FOREIGN KEY (id_product) REFERENCES product(id)
);

CREATE TABLE IF NOT EXISTS sale (
    id                          INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_user                     INT NOT NULL ,
    date_time_sale              DATETIME NOT NULL,
    is_finished                 TINYINT(1) DEFAULT 0,
    CONSTRAINT check_is_finished_sale CHECK (is_finished IN (0, 1)),
    CONSTRAINT fk_user_has_sale FOREIGN KEY (id_user) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS sale_product (
    id                      INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_sale                 INT NOT NULL,
    id_product              INT NOT NULL,
    CONSTRAINT fk_sale_has_product FOREIGN KEY (id_sale) REFERENCES sale(id),
    CONSTRAINT fk_product_in_sale FOREIGN KEY (id_product) REFERENCES product(id)
);