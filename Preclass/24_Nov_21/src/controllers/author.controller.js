const express = require("express");
const { findOneAndUpdate } = require("../models/author.model");
const Author = require("../models/author.model")

const router = express.Router()


const Tag = require("../models/tag.model")

// create new item
router.post("/", async(req, res) => {
    const author = await Author.create(req.body);
    res.status(201).json({ data:author })
})


// get all items
router.get("/", async(req, res) => {
    try{
        const authors = await Author.find().lean().exec();
        res.status(201).json({ data: authors })
    }catch(e){
        res.status(500).json({staus: "Failed", Message:e.message})
    }
})


// get a single item
router.get("/:id", async(req, res) =>{
    try{
        const author = await Author.findById(req.params.id).lean().exec()
        res.status(201).json({data:author})
    }catch(e){
        res.status(500).json({staus: "Failed", Message:e.message})
    }
})


// update an existing author by an id
router.patch("/:id", async(req, res) => {
    try{
        const author = await Author.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {
                new: true
            }
            ).lean().exec();
            res.status(201).json({ data:author })
    }catch(e){
        res.status(500).json({staus: "Failed", Message:e.message})
    }
})


router.delete("/:id", async(req, res) => {
    try{
        const author = await Author.findByIdAndRemove(req.params.id).lean().exec();
        res.staus(200).json({data:author});
    }catch(e){
        res.status(500).json({staus: "Failed", Message:e.message})
    }
})


router.get("/:id/tags", async (req, res) => {
    try{
        const tags = await Tag.find({ author: req.params.id }).populate("author").lean().exec()
        const data = { tags }
        res.status(201).json({ data })
    }catch(e){
        res.status(500).json({staus: "Failed", Message:e.message})
    }
})


module.exports = router;