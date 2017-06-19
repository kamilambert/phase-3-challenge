const express = require("express")
const router = express.Router()

router.get("/zero", function(req, res) {
	res.send("0")
})

module.exports = router
