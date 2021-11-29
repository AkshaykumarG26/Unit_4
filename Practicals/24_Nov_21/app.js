const express = require("express");

const mongoose = require("mongoose");

const users = require("./users.json");

const app = express();

app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/test")
}



app.listen(4321, async function (){
    await connect()
    console.log("listening on port 4321 24_Nov_21 Practical session")
})