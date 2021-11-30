const { Schema, model} = require("mongoose");

const productSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true}
},{
    versionKey: false,
    timestamps: true
})

const Product = mongoose.model("product", productSchema)