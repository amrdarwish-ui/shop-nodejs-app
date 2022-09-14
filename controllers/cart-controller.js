const CartItem = require('../models/cartScheme')

const cartItem_cart_get =  (req, res) => {
  CartItem.find(
    { userId: req.session.userId },
    {},
    { sort: { timestamp: 1 } }
  ,).then((cartItems) => {
    res.render("cart", {
      title: "Cart",
      isUser: req.session.userId,
      isAdmin:req.session.isAdmin,
      cartItems: cartItems,
    });
  });
}

const cartItem_cart_post = (req,res)=>{
    const cartItem = new CartItem({
        name:req.body.name,
        amount:req.body.amount,
        price:req.body.price,
        productId:req.body.productId,
        userId:req.session.userId,
        timestamp:Date.now()
    })

    cartItem.save().then((result)=>{
        res.redirect('/cart')
    }).catch((err)=>{
        console.log(err)
    })
}

const updateCartItem  = (req, res) => {
   
   CartItem.updateOne(
     { _id: req.body.cartid, },
     { amount: req.body.amount, timestamp: Date.now() }
   ).then((result) => {
     res.redirect('/cart')
   }).catch((err)=>{
     console.log(err)
   })
 }
 const deleteCartItem  = (req, res) => {
   
   CartItem.deleteOne(
    {_id:req.body.cartid}
   ).then((result) => {
     res.redirect('/cart')
   }).catch((err)=>{
     console.log(err)
   })
 }







module.exports = {
    cartItem_cart_post,
    updateCartItem,
    deleteCartItem,
    cartItem_cart_get
}