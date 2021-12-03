const express = require("express")

const usersContrller = require("./controllers/user.controller")


const app = express()

app.use(express.json())
app.use("/users", usersContrller)

const connect = require("./config/db")

const start = async () => {
    await connect();

    app.listen(2321, () => {
        console.log("listening on port 2321")
    }) 
}

module.exports = start