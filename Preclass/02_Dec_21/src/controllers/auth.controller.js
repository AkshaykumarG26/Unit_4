const jwt = require("jsonwebtoken")

require("dotenv").config()

const User = require("../models/user.model")

const newToken = (user) => {
    return jwt.sign({id: user.id}, process.env.JWT_SECRET_KEY);
}


const signup = async (req, res) => {
    try{

        const user = await User.create(req.body)
        const token = newToken(user)
        return res.status(201).json({data: { token }})
    }catch(e){
        return res.status(500).json({status: "failed", message:"something went wrong"})
    }
}




const signin = async (req, res) => {
    // we try to find an user with email address
    let user;
    try{
        user = await User.findOne({email: req.body.email}).lean().exec()
        
        if(!user) return res.status(401).json({status: "failed", message: "your email or password is not correct"})
    }catch(e){
        return res.status(500).json({ status: "failed", message: e.message})
    }

    // we will try to match the password user has with the password that we stored in system
    try{
        const match = await user.checkPassword(req.body.password)
        if (!match) return res.status(401).json({
            status: "failed",
            message: "your email or password is not correct"
        })
        
        
    }catch(e){

    }

    // we will create a new token and return the token
    const token = newToken(user)

    return res.status(201).json({data: {token}})

    
}



module.exports = {
    signup, 
    signin
}




















