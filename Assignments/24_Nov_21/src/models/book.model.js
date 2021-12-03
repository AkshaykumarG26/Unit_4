const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    name: {type: String, required: true},
    body: {type: String, required: true},
    author_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "author",
            required: true,
    }
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("book", bookSchema)
