const express = require("express")

const Product = require("../models/product.model")

const authenticate = require("../middlewares/authenticate")

const router = express.Router()


router.post("/", authenticate, async(req, res) => {
    
    try{
        const user = req.user;
        console.log("user: ", user)
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            user: user.user._id
        })
        return res.status(201).json({ product })
    }catch(e){
        res.status(500).json({status: "failed", message: "something went wrong"})
    }

})


router.get("/", async(req, res) => {
    const products = await Product.find().lean().exec();
    res.send(products)
})









module.exports = router

