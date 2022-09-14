const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name: String,
    price : Number,
    amount: Number,
    userId : String,
    productId : String,
    timestamp: Number
})

const Order = mongoose.model('order',orderSchema)
module.exports = Order