const express = require('express')
const route = express.Router()
const controller = require('../controllers/add-controller')
const Product = require('../models/productSchema')
const Guard = require("./guards/auth-guard");
const multer = require('multer')
const uuid = require('uuid').v4()
const path =require('path');




route.get('/add',Guard.isAuth, (req,res)=>{
    res.render('add',{title:'Add',isUser:true,isAdmin:true})
})

route.post('/add' ,Guard.isAuth, multer({
    storage: multer.diskStorage({
        destination: (req,file, cb)=>{
            cb(null,'images')
        },
        filename: (req,file,cb)=>{
            cb(null,`${Date.now()+path.extname(file.originalname)}`)
        }
    })
}).single("image"),(req,res)=>{
    const product = new Product({
        name: req.body.name,
        category: req.body.category,
        description:req.body.description,
        price:req.body.price,
        image:req.file.filename
    })
    product.save().then((result)=>{
        res.redirect('/')
    }).catch((err)=>{
        console.log(err)
    })
})
// route.get('/',(req,res)=>{
// Product.remove().then((result)=>{
//     res.redirect('/')
// }).catch((err)=>{
//     console.log(err)
// })
// })   

module.exports = route