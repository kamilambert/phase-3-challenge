DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store

DROP TABLE IF EXISTS grocery_items;
CREATE TABLE grocery_items(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) NOT NULL,
	price DECIMAL,
	section VARCHAR(40) NOT NULL
);

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers(
	shopper_id SERIAL PRIMARY KEY,
	shopper_name VARCHAR(40) NOT NULL
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders(
	order_id INTEGER,
	order_date DATE,
	shopper_id INTEGER NOT NULL,
	name VARCHAR(40) NOT NULL
);
