const express = require("express");


const app = express()



const { register, login } = require("./controllers/auth.controller")

const productController = require("./controllers/product.controller");
const passport = require("./configs/passport")
// app.use(passport.authenticate())

app.use(passport.initialize())

passport.serializeUser(function({user, token}, done){
    done(null, {user, token})
});

passport.deserializeUser(function ({user, token}, done){
        done (null, {user, token})
})

app.use(express.json())

app.post("/register", register)
app.post("/login", login)

app.use("/products", productController)

app.get('/auth/google',
  passport.authenticate('google', {scope: [ 'email', 'profile' ] }
));

app.get('/auth/google/callback',
    passport.authenticate( 'google', {
        failureRedirect: '/auth/google/failure'
}),function(req, res){
    console.log("req:", req);
    return res.status(201).json({user: req.user, token: req.token})
}
);


app.get("/auth/google/failure", function(req, res) {
    return res.send("Something went wrong")
})















module.exports = app