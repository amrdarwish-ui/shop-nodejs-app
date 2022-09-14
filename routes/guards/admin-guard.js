const isAdmin = (res,req,next)=>{
    if(req.session.isAdmin) next()
    else res.redirect('/')
}




module.exports = isAdmin