const jwt = require("jsonwebtoken")

const User = require("../models/user.model")


const protect = async (req, res, next) => {
    const bearer = req.headers.authorization;

    if(!bearer || !bearer.startsWith("Bearer ")){
        
    }
}




// first we need to get the token

// verify the token

// retrieve the user and if user exist then good else bad token