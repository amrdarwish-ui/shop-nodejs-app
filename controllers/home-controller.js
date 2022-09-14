const Product = require('../models/productSchema')


const product_index_get = (req,res)=>{
    

    const category = req.query.category
    if(category && category != 'all'){
        console.log(`>>>>>>>>>>>${category}`)
        Product.find({category:category}).then((result)=>{
            // console.log(result)
            res.render('index',{products:result,title:"Home",isUser:req.session.userId,isAdmin:req.session.isAdmin})
        }).catch((err)=>{
            console.log(err)
        })
    }else{
        console.log('>>>>>>>>>>>>>>>>>>else')
        Product.find().then((result)=>{
            // console.log(result)
            res.render('index',{products:result,title:"Home",isUser:req.session.userId,isAdmin:req.session.isAdmin})
        }).catch((err)=>{
            console.log(err)
        })
    }
}


module.exports = {
    product_index_get
}