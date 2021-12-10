const express = require("express")
const upload = require("../utils/file-upload")

const Product = require("../models/product.model")

const router = express.Router()


router.post("/", upload.single("productImages") , async (req, res) => {
    const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        img_url: req.file.path
    })

    res.status(201).json(product)
})


router.post("/multiple", upload.array("productImages"), async (req, res) => {
    const files = req.files.map((file) => file.path)
    const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        img_url: files
    })

    res.status(201).json(product)
})

module.exports = router;