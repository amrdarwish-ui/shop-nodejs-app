const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    name: String,
    price : Number,
    amount: Number,
    userId : String,
    productId : String,
    timestamp: Number
})

const CartItem  = mongoose.model('cart',cartSchema)
module.exports = CartItem