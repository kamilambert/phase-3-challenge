const pgp = require("pg-promise")()
const promise = require("bluebird")

const connectionString = 'postgres://localhost:5432/grocery_store'
const db = pgp(connectionString)

function allItems() {
	return db.any('SELECT * FROM grocery_items')
}

function itemsInSection(section) {
    db.any('SELECT id, name FROM grocery_items WHERE section = $1', section)
    .then(console.log)
}

function cheapItems() {
	return db.any('SELECT (id, price) FROM grocery_items WHERE price < 10 ORDER BY price ASC')
}

function countItemsInSection(section) {
    db.any('SELECT COUNT(id) FROM grocery_items WHERE section = $1', section)
}

function mostRecentOrders() {
	return db.any('SELECT (order_id, order_date) FROM orders ORDER BY order_date DESC LIMIT 10')
}

function lastShopperName() {
	return db.any('SELECT shoppers.shopper_name FROM orders INNER JOIN shoppers ON shoppers.shopper_id=orders.shopper_id ORDER BY order_date DESC LIMIT 1')
}

function orderTotal(orderID) {
	return db.any('SELECT SUM(price) FROM grocery_items LEFT JOIN orders on grocery_items.name = orders.name WHERE order_id = $1', orderID)
}
