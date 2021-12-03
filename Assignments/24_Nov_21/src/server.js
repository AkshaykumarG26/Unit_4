const express = require("express");

const connect = require("./config/db")

const authorsController = require("./controllers/author.controller");

const sectionsController = require("./controllers/section.controller");

const booksController = require("./controllers/book.controller")

const checkoutsController = require("./controllers/checkuot.controller");

const app = express();

app.use(express.json());


app.use("/authors", authorsController)

app.use("/sections", sectionsController)

app.use("/books", booksController)

app.use("/checkouts", checkoutsController)





















const start = async () => {
    await connect();

    app.listen(1232, () => {
        console.log("listening on port 1232")
    })
}


module.exports = start