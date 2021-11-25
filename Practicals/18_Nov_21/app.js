const express = require("express")

const app = express();

const users = require("./users.json")

app.use(express.json())


// console.log("i have created to check git push")

app.get("/", (req, res) => {
    res.send({ users });
});

app.post("/", (req,res) => {
    const newUser = [...users, req.body];
    res.send(newUser);
    // return newUser
})



app.patch('/:id', (req, res) => {

})











app.listen(2345, function(){
    console.log("we r listening on port 2345")
});
