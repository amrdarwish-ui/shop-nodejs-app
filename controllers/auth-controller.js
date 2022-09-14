const User = require("../models/authSchema");
const bcrypt = require('bcrypt')

const signupPost = (req,res)=>{
    User.findOne({email:req.body.email}).then((result)=>{
        if(result){
            res.render('signup',{title:'Sign Up',errMessage :'email already exists',isUser:req.session.userId,isAdmin:req.session.isAdmin})  
        }else{
            bcrypt.hash(req.body.password,10).then((password)=>{
                const user = new User({
                     email:req.body.email,
                     password:password,
                     username:req.body.username,
                     isAdmin:false
                })
                
                user.save().then((result)=>{
                    res.redirect('/auth/signin')
                })
            }).catch((err)=>{
                console.log(err)
            })
        }
    }).catch((err)=>{
        console.log(err)
    })
}
const signupGet = (req,res)=>{
    res.render('signup',{title:'Sign Up',errMessage:'null',isUser:req.session.userId,isAdmin:req.session.isAdmin})
}

const signin_get = (req,res)=>{
    res.render('signin',{title:'Sign in',errMessage:'null',isUser:req.session.userId,isAdmin:req.session.isAdmin})
}

const login_post = (req,res)=>{
    User.findOne({email:req.body.email}).then((user)=>{
       if(!user){
           res.render('signin',{title:'Sign in',errMessage:'email not found',isUser:req.session.userId,isAdmin:req.session.isAdmin})
       }else{
           bcrypt.compare(req.body.password,user.password).then((result)=>{
               if(!result){
                   res.render('signin',{title:'Sign in',errMessage:'password is not correct',isUser:req.session.userId,isAdmin:req.session.isAdmin})
               }else{
                   req.session.userId  =  user._id
                   req.session.isAdmin = user.isAdmin
                   res.redirect('/')
               }
           })
       }
    }).catch((err)=>{
       console.log(err)
    })
}
module.exports = {
signupPost,
signupGet,
login_post,
signin_get
};
