const express = require("express")

const protect = require("../middlewares/protect")

const router = express.Router()

const User = require("../models/user.model")

router.get("/", protect, async(req, res) => {

    
    try{
        const users = await User.find().select('-password').lean().exec()
        return res.status(200).send(users)
    }catch(e){
        return res.send("error")
    }


})







module.exports = router