create database ng_noticias_db;

use ng_noticias_db;

create table noticias(
id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(180),
descripcion VARCHAR(15000),
image TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


