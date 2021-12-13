const express = require("express");
const router = express.Router();

const User = require("../models/user.model");



const upload = require("../middleware/upload")

router.post("/", upload.single("profile_photo_url"), async (req, res) => {
    try{
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            profile_photo_url: req.file.path,
            roles: req.body.roles
        })
        return res.status(201).send(user)
    }catch(e){
        return res.status(500).send({status: "failed", message: e.message});
    }
})

router.get("/", async(req,res) => {
    try{
        const users = await User.find().select("-password").lean().exec();
        return res.status(201).send(users);

    } catch(e){
        return res.status(500).send({status: "failed", message: e.message});
    }
});


module.exports = router;