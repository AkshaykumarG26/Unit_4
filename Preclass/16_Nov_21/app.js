const express = require("express");

const app = express();

app.listen(1234, function(){
    console.log("we are listening on port 1234")
});
// console.log('akshay')


// get - retrive a list of something or single item
// post - save something on server or the db
// put/patch - update something, put replaces the item and patch appends to it
// delete - when u want to delete an item

// logger to parse request body
// app.use(logger);


app.use(express.json());

app.get('/', (req, res) => {
    res.send("Home Page Get Request")
    // console.log();
})


app.post('/', (req, res) => {
    // console.log("req.body", req.body)
    res.status(201).json(req.body);
    console.log("Home Page Post Request");
})


// function logger(req, res, next){
//     console.log("logging before")
//     next();
//     console.log("logging after next")
// }