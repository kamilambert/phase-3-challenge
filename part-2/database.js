const pgp = require("pg-promise")

function allItems() {
	return db.any('SELECT * FROM grocery_items')
}

function itemsInSection(section) {
	return db.any('SELECT (id, name) FROM grocery_items WHERE id=$1', section)
}

function cheapItems() {
	return db.any('SELECT (id, price) FROM grocery_items WHERE price < 10 ORDER BY price ASC')
}

function countItemsInSection(section) {
	return db.any('SELECT count(*) as "Number of Items" FROM grocery_items WHERE section='$1'', section)
}

function mostRecentOrders() {
	return db.any('SELECT (order_id, order_date) FROM orders ORDER BY order_date DESC LIMIT 10')
}

function lastShopperName() {
	return db.any('SELECT shoppers.shopper_name FROM orders INNER JOIN shoppers ON shoppers.shopper_id=orders.shopper_id ORDER BY order_date DESC LIMIT 1')
}

function orderTotal(orderNumber) {
	return db.any()
}
