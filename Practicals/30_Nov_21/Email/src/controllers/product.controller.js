const express = require("express")

const router = express.Router()

const Product = require("../models/product.model")


router.post("/", async (req,res) => {
    try{
        const product = await Product.create(req.body)
        return res.status(201).json({ product })
    }catch(e){
        return res.status(500).json({Status: "Failed", Message: e.message})
    }
})


router.get("/", async (req, res) => {
    try{
        const page = +req.query.page || 1;
        const size = +req.query.size || 2;

        // skip item = (page-1)*size

        const skip = (page - 1) * size

        const products = await Product.find().skip(skip).limit(size).lean().exec();

        const totalPages = Math.ceil((await Product.find().countDocuments()) / size);

        return res.status(200).json({products, totalPages})
    }catch(e){
        return res.status(500).json({Status: "Failed", Message: e.message})
    }
})


module.exports = router