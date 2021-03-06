const express = require("express")

const Checkout = require("../models/checkout.model")

const router = express.Router()


router.post("/", async(req, res) => {
    try{
        const checkout = await Checkout.create(req.body)
        return res.status(201).send(checkout)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.get("/", async(req, res) => {
    try{
        const checkouts = await Checkout.find().lean().exec()
        return res.status(200).send(checkouts)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.get("/:id", async(req, res) => {
    try{
        const checkout = await Checkout.findById(req.params.id).lean().exec();
        return res.status(200).send(checkout)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.patch("/:id", async(req, res) => {
    try{
        const checkout = await Checkout.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.status(201).send(checkout)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.delete("/:id", async(req, res) => {
    try{
        const checkout = await Checkout.findByIdAndRemove(req.params.id).lean().exec()
        return res.send(checkout)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})



module.exports = router