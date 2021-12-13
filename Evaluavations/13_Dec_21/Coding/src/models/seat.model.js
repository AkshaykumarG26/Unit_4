const mongoose = require("mongoose")

const seatSchema = new mongoose.Schema({
    show: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "seat",
        required: true
    }
},{
    versionKey: false,
    timestamps: true
})

const Seat = mongoose.model("seat", seatSchema);

module.exports = Seat