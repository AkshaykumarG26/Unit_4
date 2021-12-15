const express = require("express")

const {register, login} = require("./controllers/auth.controller")

const postController = require("./controllers/post.controller")

const app = express()

app.use(express.json())

app.post("/register", register)
app.post("/login", login)


app.use("/posts", postController)




const connect = require("./configs/db")

const start = async () => {
    await connect()

    app.listen(2132, () => {
        console.log("listening on port 2132")
    })
}

module.exports = start