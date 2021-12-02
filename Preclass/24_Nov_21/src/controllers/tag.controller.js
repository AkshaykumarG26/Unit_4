const express = require("express")

const mongoose = require("mongoose")
const Tag = require("../models/tag.model")

const router = express.Router()

// create a new tag
router.post("/", async (req, res) => {
    try{
        const tag = await Tag.create(req.body);
        res.status(201).json({tag})
    }catch(e){
        res.status(500).json({staus: "Failed", Message:e.message})
    }
});


// fetch all tags
router.get("/", async (req, res) => {
    try{
        const tags = Tag.find({}).populate("author").lean().exec();
        res.status(201).json({data:tags})
    }catch(e){
        res.status(500).json({staus: "Failed", Message:e.message})
    }
})

// fetch a single tag by id
router.get("/:id", async (req, res) => {
    try{
        const tag = await Tag.findById(req.params.id).populate("author").lean().exec()
        res.status(201).json({data:tag})
    }catch(e){
        res.status(500).json({staus: "Failed", Message:e.message})
    }
})

// update an existing item by id
router.patch("/:id", async (req, res) => {
    try{
        const tag = await Tag.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true,
        }).lean().exec()
        res.status(200).json({data: tag})
    }catch(e){
        res.status(500).json({staus: "Failed", Message:e.message})
    }
})


// delete a single item by id
router.delete("/:id", async(req, res) => {
    try{
        const tag = await Tag.findByIdAndRemove(req.params.id).lean().exec();
        res.status(200).json({data: tag})
    }catch(e){
        res.status(500).json({staus: "Failed", Message:e.message})
    }
});


module.exports = router