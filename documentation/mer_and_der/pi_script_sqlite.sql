CREATE TABLE IF NOT EXISTS role (
    id           INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name         VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS address (
    id                  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    street              VARCHAR(100) NOT NULL,
    `number`            INTEGER NOT NULL,
    neighborhood        VARCHAR(100) NOT NULL,
    cep                 VARCHAR(20) NOT NULL,
    state               VARCHAR(50) NOT NULL,
    city                VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS user (
    id              INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    password        VARCHAR(255) NOT NULL ,
    email           VARCHAR(100) NOT NULL ,
    name            VARCHAR(100),
    is_deleted      INTEGER DEFAULT 0 CHECK (is_deleted IN (0, 1))
);

CREATE TABLE IF NOT EXISTS user_address(
    id                  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    id_user             INTEGER NOT NULL,
    id_address          INTEGER NOT NULL,
    CONSTRAINT fk_user_has_address FOREIGN KEY (id_user) REFERENCES user(id) ON DELETE CASCADE,
    CONSTRAINT fk_address FOREIGN KEY (id_address) REFERENCES address(id)
);

CREATE TABLE IF NOT EXISTS user_role(
    id              INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    id_user         INTEGER NOT NULL,
    id_role         INTEGER NOT NULL,
    CONSTRAINT fk_user_has_role FOREIGN KEY (id_user) REFERENCES user(id) ON DELETE CASCADE, 
    CONSTRAINT fk_role FOREIGN KEY (id_role) REFERENCES role(id)
);

CREATE TABLE IF NOT EXISTS art (
    id              INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name            VARCHAR(100) NOT NULL ,
    description     TEXT,
    characteristic  VARCHAR(255),
    is_deleted      INTEGER DEFAULT 0 CHECK (is_deleted IN (0, 1))
);

CREATE TABLE IF NOT EXISTS `order` (
    id                  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    date_time_order     DATETIME NOT NULL,
    id_user             INTEGER NOT NULL,
    description         TEXT,
    is_finished              INTEGER DEFAULT 0 CHECK (is_finished IN (0, 1)),
    CONSTRAINT fk_user_has_order FOREIGN KEY (id_user) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS order_art (
    id                  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    id_order            INTEGER NOT NULL ,
    id_art              INTEGER NOT NULL ,
    CONSTRAINT fk_order FOREIGN KEY (id_order) REFERENCES `order`(id),
    CONSTRAINT fk_art_in_order FOREIGN KEY (id_art) REFERENCES art(id)
);

CREATE TABLE IF NOT EXISTS product (
    id              INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    id_art          INTEGER NOT NULL ,
    type_product    VARCHAR(50) NOT NULL ,
    cod_product     VARCHAR(255) NOT NULL ,
    price           DECIMAL(10, 2) NOT NULL ,
    name            VARCHAR(100),
    is_discontinued      INTEGER DEFAULT 0 CHECK (is_discontinued IN (0, 1)),
    CONSTRAINT fk_art_in_product FOREIGN KEY (id_art) REFERENCES art(id)
);

CREATE TABLE IF NOT EXISTS promotion (
    id                      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    cod_promotion           VARCHAR(100) NOT NULL,
    start_date_promotion    DATETIME NOT NULL,
    end_date_promotion      DATETIME NOT NULL,
    is_closed              INTEGER DEFAULT 0 CHECK (is_closed IN (0, 1))
);

CREATE TABLE IF NOT EXISTS product_promotion (
    id                      INTEGER PRIMARY KEY AUTOINCREMENT,
    id_product              INTEGER,
    id_promotion            INTEGER,
    CONSTRAINT fk_product_in_promotion FOREIGN KEY (id_product) REFERENCES product(id),
    CONSTRAINT fk_promotion_has_product FOREIGN KEY (id_promotion) REFERENCES promotion(id)
);

CREATE TABLE IF NOT EXISTS cart (
    id                      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    id_user                 INTEGER NOT NULL,
    is_deleted              INTEGER DEFAULT 0 CHECK (is_deleted IN (0, 1)),
    CONSTRAINT fk_user_has_cart FOREIGN KEY (id_user) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS cart_product (
    id                      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    id_cart                 INTEGER NOT NULL,
    id_product              INTEGER NOT NULL,
    CONSTRAINT fk_cart_has_product FOREIGN KEY (id_cart) REFERENCES cart(id),
    CONSTRAINT fk_product_in_cart FOREIGN KEY (id_product) REFERENCES product(id)
);

CREATE TABLE IF NOT EXISTS sale (
    id                      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    id_user                 INTEGER NOT NULL ,
    date_time_sale          DATETIME NOT NULL,
    is_finished              INTEGER DEFAULT 0 CHECK (is_finished IN (0, 1)),
    CONSTRAINT fk_user_has_sale FOREIGN KEY (id_user) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS sale_product (
    id                      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    id_sale                 INTEGER NOT NULL,
    id_product              INTEGER NOT NULL,
    CONSTRAINT fk_sale_has_product FOREIGN KEY (id_sale) REFERENCES sale(id),
    CONSTRAINT fk_product_in_sale FOREIGN KEY (id_product) REFERENCES product(id)
);