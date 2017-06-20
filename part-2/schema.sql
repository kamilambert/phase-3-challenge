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
	shopper_id SERIAL PRIMARY KEY,
	shopper_name VARCHAR(40) NOT NULL
);

INSERT INTO shoppers (shopper_name) VALUES ('bob');
INSERT INTO shoppers (shopper_name) VALUES ('megan');
INSERT INTO shoppers (shopper_name) VALUES ('sean');
INSERT INTO shoppers (shopper_name) VALUES ('vanessa');

DROP TABLE IF EXISTS orders;
CREATE TABLE orders(
	order_id INTEGER,
	order_date DATE,
	shopper_id INTEGER NOT NULL,
	name VARCHAR(40) NOT NULL
);

INSERT INTO orders (order_id, order_date, shopper_id, name) VALUES (1, '2017-01-01', 1, 'Coffee');
INSERT INTO orders (order_id, order_date, shopper_id, name) VALUES (1, '2017-01-02', 1, 'Flour');
INSERT INTO orders (order_id, order_date, shopper_id, name) VALUES (2, '2017-01-03', 1, 'Ketchup');
INSERT INTO orders (order_id, order_date, shopper_id, name) VALUES (3, '2017-01-04', 2, 'Oranges');
INSERT INTO orders (order_id, order_date, shopper_id, name) VALUES (4, '2017-01-05', 3, 'Pasta');
INSERT INTO orders (order_id, order_date, shopper_id, name) VALUES (4, '2017-01-06', 3, 'Pizza');
INSERT INTO orders (order_id, order_date, shopper_id, name) VALUES (5, '2017-01-07', 4, 'Rice');
INSERT INTO orders (order_id, order_date, shopper_id, name) VALUES (5, '2017-01-08', 4, 'Salami');
INSERT INTO orders (order_id, order_date, shopper_id, name) VALUES (5, '2017-01-09', 4, 'Fish');
INSERT INTO orders (order_id, order_date, shopper_id, name) VALUES (6, '2017-01-10', 4, 'Oil');
INSERT INTO orders (order_id, order_date, shopper_id, name) VALUES (6, '2017-01-10', 4, 'Oil');
INSERT INTO orders (order_id, order_date, shopper_id, name) VALUES (6, '2017-01-10', 4, 'Oil');
INSERT INTO orders (order_id, order_date, shopper_id, name) VALUES (6, '2017-01-10', 4, 'Oil');
