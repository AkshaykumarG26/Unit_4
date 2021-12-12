const express = require("express")

const userController = require("./controllers/user.controller")


const app = express()

app.use(express.json())

app.use("/users", userController)




















const connect = require("./config/db")
const start = async () => {
    await connect()

    app.listen(2122, function (){
        console.log("listening on port 2122")
    }) 
}

module.exports = start