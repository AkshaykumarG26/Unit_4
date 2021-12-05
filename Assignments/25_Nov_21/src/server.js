const express = require("express")

const connect = require("./configs/db")


const evaluationsController = require("./controllers/evaluation.controller");

const studentsController = require("./controllers/student.controller")

const topicsController = require("./controllers/topic.controller")

const usersController = require("./controllers/user.controller")

const app = express()

app.use(express.json())

app.use("/evaluations", evaluationsController)

app.use("/students", studentsController)

app.use("/topics", topicsController)

app.use("/users", usersController)





const start = async () => {
    await connect()

    app.listen(2312, () => {
        console.log("listening on port 2312")
    })
}

module.exports = start