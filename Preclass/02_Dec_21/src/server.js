const express = require("express")

const app = express()

app.use(express.json())


const {signup, signin} = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller")


app.post("/signup", signup);
app.post("/signin", signin);


app.use("/users", userController)








const connect = require("./configs/db")

const start = async () => {
    await connect()

    app.listen(2132, () => {
        console.log("listening on port 2132")
    })
}

module.exports = start