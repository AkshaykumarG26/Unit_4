const mongoose = require("mongoose")


// User mongoose
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

module.exports = mongoose.model("user", userSchema) // always give collection name singular here mongo will make it plural
                                                // it will create users collections in db
