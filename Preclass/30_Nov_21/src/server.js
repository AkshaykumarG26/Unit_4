const express = require("express")

const connect = require("./config/db");

const productController = require("./controllers/product.controller")

const app = express()


app.use(express.json())

app.use("/products", productController)




const start = async () => {
    await connect()

    app.listen(1211, () => {
        console.log("listening on 1211")
    })  
}


module.exports = start