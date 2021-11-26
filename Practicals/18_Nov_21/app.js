const express = require("express")

const app = express();

const users = require("./users.json")

app.use(express.json())


// console.log("i have created to check git push")

app.get("/", (req, res) => {
    res.send({ users });

});


app.post("/", (req,res) => {
    // console.log(req.body)
    const newUser = [...users, req.body];
    res.send(newUser)
    
})


app.patch('/:email', (req, res) => {
    const newUser = users.map((user) => {

        if(req.params.email === user.email){
            if(req?.body?.first_name) user.first_name = req.body.first_name;
            if(req?.body?.last_name) user.last_name = req.body.last_name;
            if(req?.body?.email) user.email = req.body.email;
            if(req?.body?.gender) user.gender = req.body.gender;
        }
        return user;
    })
    res.send(newUser)
})



app.delete("/:email", (req, res) => {
    const newUser = users.filter(user => user.email !== req.params.email);
    res.send(newUser)
})


app.get("/:email", (req, res) => {
    const newUser = users.filter(user => user.email === req.params.email);
    res.send(newUser)
})








app.listen(2345, function(){
    console.log("we r listening on port 2345 Practical on 18_Nov")
});
