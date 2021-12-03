const express = require("express");

const connect = require("./config/db")

const usersController = require("./controllers/users.controller")

const tagController = require("./controllers/tags.controller")

const postController = require("./controllers/posts.controller")

const commentController = require("./controllers/comments.controller")


const app = express();

app.use(express.json());

app.use("/users", usersController)

app.use("/tags", tagController)

app.use("/posts", postController)

app.use("/comments", commentController)


app.listen(4321, async function (){
    await connect()
    console.log("listening on port 4321 24_Nov_21 Practical session")
})