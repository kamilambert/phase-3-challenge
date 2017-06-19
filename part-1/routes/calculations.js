const express = require("express")
const router = express.Router()

router.get("/zero", function(req, res) {
	res.send("0")
})

router.get("/add", function(req, res) {
	const a = parseInt(req.query.a)
	const b = parseInt(req.query.b)
	const c = a + b
	res.send(`${c}`)
})

module.exports = router
