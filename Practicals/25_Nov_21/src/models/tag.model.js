const mongoose = require("mongoose")



// Tag mongoose
const tagSchema = new mongoose.Schema({
    name: {type: String, required: true}
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("tag", tagSchema) // it will create tags collections in db
