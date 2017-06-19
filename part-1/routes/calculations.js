const express = require("express")
const router = express.Router()

router.get("/", function(req, res) {
	res.send("Go to a real route to see some calculation magic")
})
router.get("/zero", function(req, res) {
	res.send("0")
})

router.get("/add", function(req, res) {
	const a = parseInt(req.query.a)
	const b = parseInt(req.query.b)
	res.send(`${a + b}`)
})

router.get("/subtract", function(req, res) {
	const a = parseInt(req.query.a)
	const b = parseInt(req.query.b)
	res.send(`${a - b}`)
})

router.get("/double/:number", function(req, res) {
	const number = parseInt(req.params.number)
	res.send(`${number * 2}`)
})

module.exports = router
