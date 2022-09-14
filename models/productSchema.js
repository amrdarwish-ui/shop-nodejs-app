const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  category : String
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
