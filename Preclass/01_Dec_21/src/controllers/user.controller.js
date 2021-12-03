const express = require("express")

const { body, validationResult } = require("express-validator")

const router = express.Router()

const User = require("../models/users.model")

router.post("/", 
body("id").isLength({min: 1}).withMessage("id is required"), 
body("first_name").isLength({min: 1}).withMessage("first_name is required"), 
body("last_name").isLength({min:1}).withMessage("last_name is required"), 
body("email").isEmail().withMessage("valid email is required"), 
body("gender").isLength({min:1}).withMessage("gender is required"), 
body("age").isLength({min: 1}).withMessage("age is required"),
async(req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ data: errors.array() })
        }
        const user = await User.create(req.body);
        return res.status(201).json({data: user})
    
})

module.exports = router