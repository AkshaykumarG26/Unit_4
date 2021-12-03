const express = require("express");

const usersController = require("./controllers/user.controller")

const app = express()

app.use(express.json())

app.use("/users", usersController)






const connect = require("./config/db");

const start = async () => {
    await connect();

    app.listen(2331, () => {
        console.log("listening on port 2331")
    })
}

module.exports = start