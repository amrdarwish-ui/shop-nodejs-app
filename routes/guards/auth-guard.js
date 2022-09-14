const isAuth = (req,res,next)=>{
    if(req.session.userId) next()
    else res.redirect('/auth/signin')
}
const notAuth = (req,res,next)=>{
    if(!req.session.userId) next()
    else res.redirect('/')
}




module.exports = {
    isAuth,
    notAuth,
    
}