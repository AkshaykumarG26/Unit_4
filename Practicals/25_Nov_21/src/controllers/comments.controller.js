const express = require("express")

const Comment = require("../models/comment.model")

const router = express.Router()



// -----------------  Comments CRUD  -----------------
router.post("/", async (req, res) => {
    try{
        const comments = await Comment.create(req.body);
        return res.status(201).send(comments);
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})

router.get("/", async (req, res) => {
    try{
        const comments = await Comment.find().lean().exec();
        return res.status(200).send(comments)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.get("/:id", async (req, res) => {
    try{
        const comment = await Comment.findById(req.params.id).lean().exec();
        res.status(200).send(comment);
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.patch("/:id", async (req, res) => {
    try{
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.status(201).send(comment)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.delete("/:id", async (req, res) => {
    try{
        const comment = await Comment.findByIdAndRemove(req.params.id).lean().exec();
        return res.status(200).send(comment)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})



module.exports = router