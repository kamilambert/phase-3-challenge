const express = require("express")
const app = express()
const routes = require("./routes/calculations")
const router = express.Router()
const path = require("path")

// app.set("views", path.join(__dirname, "views"))
// app.set("view engine", "pug")

// app.use(express.static(__dirname + "/public"))

app.use("/", routes)

app.listen(3000, function() {
	console.log("here to serve you!");
})

module.exports = app
