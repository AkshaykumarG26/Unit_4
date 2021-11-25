const express = require("express");

const app = express()

app.use(express.json())

const users = require("./users.json")


app.get('/', (req, res) => {
    res.send("Welcome To Home Page")
});


app.get('/users', (req,res) =>  {
    const newUser = [...users, req.body]
    res.send(newUser)
})


app.listen(2345, function() {
    console.log("listening on port 2345")
})