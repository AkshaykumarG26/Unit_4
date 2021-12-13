const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema({
    name: {type: String, required: true},
    threatre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "threatre",
        required: true
    }
},{
    versionKey: false,
    timestamps: true
})

const Screen = mongoose.model("screen", screenSchema)

module.exports = Screen