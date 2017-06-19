const express = require("express")
const app = express()
const routes = require("./routes/calculations")
const router = express.Router()
const path = require("path")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))

app.use("/", routes)

app.listen(3000, function() {
	console.log("here to serve you!");
})

module.exports = app
