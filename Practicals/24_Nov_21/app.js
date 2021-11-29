const express = require("express");

const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/test")
}


const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: false},
    email: {type: String, required: true, unique: true},
    gender: {type: String, required: false, default: "Male"},
    age: {type: Number, require: true}
},{
    versionKey: false,
    timestamps: true
})

const User = mongoose.model("user", userSchema) // always give collection name singular here mongo will make it plural

const app = express();

app.use(express.json());

/*
post = /users
get all = /users
get single = /users/:id
update single = /users/:id
delet single = /users/:id
*/

app.post("/users", async (req, res) => {
    try{
        const user = await User.create(req.body);  //create is insert
        res.status(201).send(user)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})


app.get("/users", async(req, res) => {
    try{
        const users = await User.find().lean().exec();
        return res.status(201).send({users})
    }catch(e){
        return res.status(500).json({ status: e.message })
    }
})


app.get("/users/:id", async(req, res) => {
    try{
        const user = await User.findById(req.params.id).lean().exec();
        return res.send({ user });
    }catch(e){
        return res.status(500).json({status: e.message})
    }
})


app.patch("/users/:id", async(req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.status(201).send({user})
    }catch(e){
        return res.status(500).json({status: e.message})
    }
})


app.delete("/users/:id", async (req, res) => {
    try{

        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(user)
    }catch(e){
        return res.status(500).json({status: e.message})
    }
})



app.listen(4321, async function (){
    await connect()
    console.log("listening on port 4321 24_Nov_21 Practical session")
})