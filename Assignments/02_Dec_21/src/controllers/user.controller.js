const express = require("express")

const { body, validationResult } = require("express-validator")

const router = express.Router()

const User = require("../models/user.model")


router.post("/",
body("first_name").notEmpty().withMessage("first_name is required"),
body("last_name").notEmpty().withMessage("last_name is required"),
body("email").custom(async (value) => {
    const userByEmail = await User.findOne({email: value}).lean().exec()
    if (userByEmail){
        throw new Error("Try with another Email Address")
    }
}).isEmail().withMessage("valid email is required"),
async(req, res) => {
    const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }
    try{
        const user = await User.create(req.body)
        return res.status(201).send(user)
    }catch(e){
        return res.status(500).send(e)
    }
}
)



module.exports = router





