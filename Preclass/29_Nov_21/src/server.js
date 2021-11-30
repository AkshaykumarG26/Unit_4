const express = require("express")

const app = express();


const usersController = require("./controllers/user.controller")

app.use("/users", usersController)




const connect = require("./config/db");

const start = async () => {
    await connect()

    app.listen(2321, () => {
        console.log("listening on 2321 port 29_Nov_21 Preclass")
    })
}

module.exports = start