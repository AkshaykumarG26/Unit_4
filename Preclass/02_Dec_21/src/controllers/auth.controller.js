const jwt = require("jsonwebtoken");

require("dotenv").config()

const User = require("../models/user.model")

const newToken = (user) => {
    return jwt.sign({id: user.id}, process.env.JWT_SECRET_KEY)
}




const signup = async (req, res) => {
    
    try{
        const user = await User.create(req.body)
        const token = newToken(user)
        return res.status(201).json({ data: {token} });
    }catch(e){
        return res.status(500).json({status:"failed", message:e.message})
    }
};


const signin = async (req, res) => {
    try{
        const user = User.findOne({email: req.body.email}).lean().exec();

        if(!user) return res.status(401).json({status: "failed", message: "email or pass not correct"})
    }catch(e){
        return res.status(500).json({status:"failed", message:e.message})
    }

    
    try{

        const match = await user.checkPassword(req.body.password)
        if(!match) return res.status(401).json({status: "failed", message: "email or pass not correct"})
    }catch(e){
        return res.status(500).json({status:"failed", message:e.message})
    }

    const token = newToken(user)
    return res.status(201).json({ data: {token}})
}

module.exports = {
    signup,
    signin
}