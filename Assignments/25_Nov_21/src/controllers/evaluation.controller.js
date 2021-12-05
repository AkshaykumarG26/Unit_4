const express = require("express");

const Evaluation = require("../models/evaluation.model")

const router = express.Router()


router.post("/", async (req, res) => {
    try{
        const evaluation = await Evaluation.create(req.body)
        return res.status(201).send(evaluation)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})

router.get("/", async (req, res) => {
    try{
        const evaluations = Evaluation.find().lean().exec()
        return res.status(200).send(evaluations)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})

router.get("/:id", async (req, res) => {
    try{
        const evaluation = await Evaluation.findById(req.params.id).lean().exec()
        return res.status(200).send(evaluation)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.patch("/:id", async(req, res) => {
    try{
        const evaluation = await Evaluation.findByIdAndUpdate(req.params.id, req.body, {
            new:true
        }).lean().exec()
        return res.status(201).send(evaluation)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})

router.delete("/:id", async (req, res) => {
    try{
        const evaluation = await Evaluation.findByIdAndRemove(req.params.id).lean().exec()
        return res.send(evaluation)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})



module.exports = router