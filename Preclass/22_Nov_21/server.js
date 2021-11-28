const express = require('express');

const mongoose = require('mongoose');

const app = express();

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/test",{
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
    });
};


const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    ip_address: String,
    age: Number
});


const User = mongoose.model("user", userSchema)

app.get("/users", async (req, res) => {
    const user = await User.find({email: "gezzelll@php.net"}).lean().exec();
    console.log(user);
    res.status(200).json({data: user})
})









const start = async () => {
    await connect();
    app.listen(2233, () => {
        console.log("listeninng on port 2233 Preclass 22_Nov_21")
    })
}

start()