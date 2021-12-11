const express = require("express")

const Product = require("../models/product.model")

const upload = require("../middleware/upload")

const router = express.Router()

router.post("/", upload.single("productImages"), async(req, res) => {
    try{
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            image_urls: req.file.path
        });
        return res.status(201).json(product)
    }catch(e){
        return res.status(500).json({ status: "failed", message: e.message })
    }
});

router.post("/multiple", upload.any("productImages"), async(req, res) => {
    try{
        const files = req.files.map((file) => file.path)
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            image_urls: files
        });
        return res.status(201).json(product)
    }catch(e){
        return res.status(500).json({ status: "failed", message: e.message })
    }
});

router.get("/", async(req, res) => {
    try{
        const products = await Product.find().lean().exec();
        return res.status(200).json({ Products: products })
    }catch(e){
        return res.status(500).json({ status: "failed", message: e.message })
    }
})

module.exports = router

// try{

//     }catch(e){
//         return res.status(500).json({ status: "failed", message: e.message })
//     }