const express = require("express")

const Section = require("../models/section.model")

const router = express.Router()



router.post("/", async(req, res) => {
    try{
        const section = await Section.create(req.body)
        return res.status(201).json(section)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})

router.get("/", async(req, res) => {
    try{
        const sections = await Section.find().lean().exec()
        return res.status(200).send(sections)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})

router.get("/:id", async(req, res) => {
    try{
        const section = await Section.findById(req.params.id).lean().exec();
        return res.status(200).send(section)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.patch("/:id", async(req, res) => {
    try{
        const section = await Section.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.send(section)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.delete("/:id", async(req, res) => {
    try{
        const section = await Section.findOneAndRemove(req.params.id).lean().exec();
        return res.send(section)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})





module.exports = router