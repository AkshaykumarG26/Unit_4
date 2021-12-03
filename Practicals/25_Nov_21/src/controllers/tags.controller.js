const express = require("express")

const Tag = require("../models/tag.model")

const router = express.Router()


//  -----------------  Tags CRUD  -----------------
router.post("/", async(req, res) => {
    try{
        const tag = await Tag.create(req.body);
        res.status(201).send(tag)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.get("/", async (req, res) => {
    try{
        const tags = await Tag.find().lean().exec();
        return res.status(200).json({Data: tags})
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})

router.get("/:id", async (req, res) => {
    try{
        const tag = await Tag.findById(req.params.id).lean().exec();
        return res.status(200).send(tag)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})

router.patch("/:id", async(req, res) => {
    try{
        const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
        return res.status(200).send(tag)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})

router.delete("/:id", async (req, res) => {
    try{
        const tag = await Tag.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(tag)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


// show all the post using tag name
router.get("/:id/posts", async(req, res) => {
    try{
        const tag = await Tag.findById(req.params.id).lean().exec();
        const post = await Post.find({tag_id: tag._id}).lean().exec()

        return res.status(200).send({post, tag})
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


module.exports = router