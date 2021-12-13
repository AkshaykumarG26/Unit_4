const express = require("express")

const app = express()

const userController = require("./controllers/user.controller");
const { register, login } = require("./controllers/auth.controller");
const { body } = require("express-validator");

app.use(express.json());


app.use("/register",
    // body("name").notEmpty().withMessage("Name is required"),
    // body("email").isEmail().withMessage("Proper email is required"),
    // body("password").notEmpty().withMessage("Password is required"),
    // body("profile_photo_url").notEmpty().withMessage("Profile Pic is required"),
    // body("roles").notEmpty().withMessage("roles is required"),
    register);

app.use("/login", body("email").isEmail().withMessage("Proper email is required"),
    body("password").notEmpty().withMessage("Password is required"),
    login);


app.use("/users", userController);








































































const connect = require("./configs/db")
const start = async () => {
    await connect();

    app.listen(1234, () => {
        console.log("listening on port 1234")
    })
}

module.exports = start;