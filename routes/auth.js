const express = require('express')
const route = express.Router()
const controller = require('../controllers/auth-controller')
const Guard = require('./guards/auth-guard')



route.get('/signin',Guard.notAuth,controller.signin_get)
route.post('/signin',controller.login_post)

route.all('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    })  
})


route.get('/signup',Guard.notAuth,controller.signupGet)
route.post('/signup',controller.signupPost)

module.exports = route