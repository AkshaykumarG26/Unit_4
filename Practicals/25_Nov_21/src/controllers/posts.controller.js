const express = require("express");

const Post = require("../models/post.model")


const router = express.Router();


// -----------------  posts CRUD  -----------------

router.post("/", async (req, res) => {
    try{
        const post = await Post.create(req.body);  //create is insert
        res.status(201).send(post)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.get("/", async(req, res) => {
    try{
        const posts = await Post.find().lean().exec();
        return res.status(201).send({posts})
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.get("/:id", async(req, res) => {
    try{
        const post = await Post.findById(req.params.id).lean().exec();
        return res.send({ post });
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.patch("/:id", async(req, res) => {
    try{
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.status(201).send({post})
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.delete("/:id", async (req, res) => {
    try{
        const post = await Post.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(post)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})



module.exports = router
