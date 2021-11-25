const express = require("express");

const app = express()


app.get("/", (req,res) => {
    res.send("hello")
})

















app.listen(1324, function(){
    console.log("server running on port 1324")

})