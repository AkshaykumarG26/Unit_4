const jwt = require("jsonwebtoken")

require("dotenv").config()


const verifyToken = (token) => {
    return new Promise((resolve, reject) => {

        jwt.verify(token, process.env.JWT_ACCESS_KEY, function(err, token){
            if(err) return reject(err)

            return resolve(token)
        })
    })
}


module.exports = async (req, res, next) => {


    // if we receive bearer token in header 
    const bearerToken = req?.headers?.authorization

    // if not received or token is not a bearer toekn then we will throw err
    if(!bearerToken || !bearerToken.startsWith("Bearer ")){
        return res
                .status(400)
                .json({status: "failed", 
                    message: "please provide valid token"
                })
    }

    
    const token = bearerToken.split("Bearer ")[1];

    let user;
    try{
        user = await verifyToken(token)
    }catch(e){
        res.status(400).json({status: "failed", message: "plz provide valid token"})
    }
    // else we try to get the user from the token
    

    // if no user found then throw err
    if (!user)
    return res.status(400).json({
        status: "failed", 
        message: "please provide valid token"
    })

    // else we will attach the user to req
    req.user = user

    // then we will return next
    return next()
}