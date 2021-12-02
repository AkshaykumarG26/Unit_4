const express = require("express")

const mongoose = require("mongoose")

const Author = require("./models/author.model");

const Tag = require("./models/tag.model");

const authorController = require("./controllers/author.controller")

const tagController = require("./controllers/tag.controller")

const app = express();
app.use(express.json())


const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/relational")
}


app.use("/authors", authorController)

app.use("/tags", tagController)









const start = async () => {
    await connect()

    app.listen(1232, () => {
        console.log("listening on port 1232")
    })
}


start()