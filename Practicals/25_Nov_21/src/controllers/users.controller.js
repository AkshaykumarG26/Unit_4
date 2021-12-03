const express = require("express");

const User = require("../models/user.model")

const router = express.Router()



// -----------------  Users CRUD  -----------------

router.post("/", async (req, res) => {
    try{
        const user = await User.create(req.body);  //create is insert
        res.status(201).send(user)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.get("/", async(req, res) => {
    try{
        const users = await User.find().lean().exec();
        return res.status(201).send({users})
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.get("/:id", async(req, res) => {
    try{
        const user = await User.findById(req.params.id).lean().exec();
        return res.send({ user });
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.patch("/:id", async(req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.status(201).send({user})
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})


router.delete("/:id", async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(user)
    }catch(e){
        return res.status(500).json({status: "Failed", Message: e.message})
    }
})



module.exports = router;