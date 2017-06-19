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

COPY grocery_items(name, price, section) FROM '/Users/kamilalambert/Desktop/Projects/phase-3-challenge/part-2/data/grocery_items.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE shoppers(
	id SERIAL PRIMARY KEY,
	shopper_name VARCHAR(40) NOT NULL
);

INSERT INTO shoppers (shopper_name) VALUES ('bob');
INSERT INTO shoppers (shopper_name) VALUES ('megan');
INSERT INTO shoppers (shopper_name) VALUES ('sean');
INSERT INTO shoppers (shopper_name) VALUES ('vanessa');

DROP TABLE IF EXISTS orders;
CREATE TABLE orders(
	id SERIAL PRIMARY KEY,
	order_date DATE,
	shopper_name VARCHAR(40) NOT NULL,
	name VARCHAR(40) NOT NULL
);
