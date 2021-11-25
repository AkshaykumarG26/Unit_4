const express = require("express")

const app = express()

// app.use(logger);

app.use(express.json())


app.get("/", (req, res) => {
    console.log("Home page get request")

})



app.post("/", (req,res) => {
    console.log("req.body", req.body)
    res.send(req.body)
    console.log("Home page post request")
})

// function logger(req, res, next){
//     console.log("logging")
//     next()
// }



app.listen(1234, function() {
    console.log("listening on port 1234")
})