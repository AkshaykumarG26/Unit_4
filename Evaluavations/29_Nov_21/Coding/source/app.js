const express = require("express");

const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/naukri")
}


const app = express()

app.use(express.json())



























app.listen(4321, async (req, res) => {
    await connect()
    console.log("listening on port 4321")
})