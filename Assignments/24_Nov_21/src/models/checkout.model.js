const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
    user_name: {type: String, required: true},
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        required: true,
        unique: true
    }
},{
    versionKey: false,
    timestamps: true
})


module.exports = mongoose.model("checkout", checkoutSchema);

