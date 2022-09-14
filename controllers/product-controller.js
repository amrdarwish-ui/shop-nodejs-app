const Product = require("../models/productSchema");


const  product_product_get =  (req,res)=>{
    Product.findById(req.params.id).then((result)=>{
        res.render('product',{product:result,title:result.name,isUser:req.session.userId,isAdmin:req.session.isAdmin})
    }).catch((err)=>{
        console.log(err)
    })
}


module.exports = {
    product_product_get
    
};
