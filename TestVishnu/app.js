const express = require("express")

const app = express();



/*
http verbs
1 get 
2 post
3 put/patch
4 delete
*/


app.get('/', (req, res) => {
    res.send("home page of get")
    // console.log("home page of get")
})






















app.listen(1234, function (){
    console.log("listening on port 1234")
})