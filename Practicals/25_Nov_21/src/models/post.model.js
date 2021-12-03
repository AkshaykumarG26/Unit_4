const mongoose = require("mongoose");


// Post mongoose
const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    tag_id: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "tag",
            required: true
        }]
    }
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("post", postSchema) // it will create posts collections in db
