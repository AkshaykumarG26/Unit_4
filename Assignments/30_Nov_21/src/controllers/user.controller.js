const express = require("express")

const User = require("../models/users.models")

const router = express.Router()


const sendMail = require("../utils/sendmail")




router.post("/", async (req, res) => {
    try{
        const user = await User.create(req.body);
        sendMail(
            "company@mail.com",
            `${req.body.email}`,
            `Welcome to ABC system ${req.body.first_name} ${req.body.last_name}`,
            `Hi ${req.body.first_name}, Please confirm your email address`,
            `<h1>Hi ${req.body.first_name}, Please confirm your email address</h1>`
        )
        return res.status(201).send(user);
    }catch(e){
        return res.status(500).json({ Status: "Failed", Message: e.message })
    }
})


router.get("/", async (req, res) => {
    try{
        const users = await User.find().lean().exec();
        return res.status(200).send(users)
    }catch(e){
        return res.status(500).json({ Status: "Failed", Message: e.message })
    }
})

module.exports = router