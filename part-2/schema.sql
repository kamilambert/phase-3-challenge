DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store

DROP TABLE IF EXISTS grocery_items;
CREATE TABLE grocery_items(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) NOT NULL,
	price DECIMAL,
	section VARCHAR(40) NOT NULL
)
