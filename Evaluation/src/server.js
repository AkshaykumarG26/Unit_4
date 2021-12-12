const express = require("express")

const userController = require("./controllers/users.controller")

const app = express()

app.use(express.json())

app.use("/users", userController)






const connect = require("./configs/db")
const start = async () => {
    await connect()

    app.listen(2111, function () {
        console.log("listening on port 2111")
    })
}

module.exports = start
