const Product = require("../models/productSchema");

const product_index_get = (req, res) => {
  const prodcut = new Product({
    name: "I mac",
    description: "apple I mac",
    image:
      "https://www.tradeinn.com/f/13781/137819846/apple-imac-27-5k-i7-3.8ghz-8gb-512gb-ssd-all-in-one-pc.jpg",
    price: 5000,
    category : 'computers'
  });

  prodcut.save().then((result)=>{
    res.redirect("/")
  }).catch((err)=>{
    console.log(err)
  })
};

module.exports = {
  product_add_get: product_index_get,
};
