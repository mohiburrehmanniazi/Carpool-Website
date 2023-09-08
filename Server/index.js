const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const uri = "mongodb+srv://jedasow785:UXvgVYIEtbUwBCZA@cluster0.rkwqjvs.mongodb.net/Users?retryWrites=true&w=majority"
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))

mongoose.connect(uri)

const route = require("./Routes/auth")
const car_route = require("./Routes/CarDetails")

app.use("/", route)
app.use("/", car_route)

app.listen(3001,() => {
    console.log("Server is listening at port 3001")
})