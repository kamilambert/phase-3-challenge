\c grocery_store

COPY grocery_items(name, price, section) FROM "/Users/kamilalambert/Desktop/Projects/phase-3-challenge/part-2/data/grocery_items.csv" DELIMITER "," CSV HEADER;

INSERT INTO shoppers (shopper_name)
VALUES ("bob"),
			("megan"),
			("sean"),
			("vanessa");

INSERT INTO orders (order_id, order_date, shopper_id, name)
VALUES (1, "2017-01-01", 1, "Coffee"),
			(1, "2017-01-02", 1, "Flour"),
			(2, "2017-01-03", 1, "Ketchup"),
			(3, "2017-01-04", 2, "Oranges"),
			(4, "2017-01-05", 3, "Pasta"),
			(4, "2017-01-06", 3, "Pizza"),
			(5, "2017-01-07", 4, "Rice"),
			(5, "2017-01-08", 4, "Salami"),
			(5, "2017-01-09", 4, "Fish"),
			(6, "2017-01-10", 4, "Oil"),
			(6, "2017-01-10", 4, "Oil"),
			(6, "2017-01-10", 4, "Oil");
