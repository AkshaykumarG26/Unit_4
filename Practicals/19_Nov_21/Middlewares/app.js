const express = require("express");

const users = require("./users.json")

const app = express()

const logger = (req, res, next) => {
    console.log(req.method);
    next();
}

app.use(logger)


app.get("/users", (req, res, next) => {
    res.send(users)
    next()
});

app.get("/users/:email", (req, res) => {
    const user = users.filter(user => user.email === req.params.email)
    res.send(user)
});






















app.listen(2345, () => {
    console.log("listening on port 2345 19_Nov_21 Practical")
})