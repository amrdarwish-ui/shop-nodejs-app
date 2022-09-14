const express = require('express')
const app = express()
const port = 3000
const helmet = require("helmet");

app.use(helmet())
//ejs
app.set("view engine", "ejs");
//for statics
app.use(express.static("public"));
app.use(express.static("images")); 
//for POST request
app.use(express.urlencoded({ extended: true }));

//routes
const homeRout = require('./routes/home')
const addRout = require('./routes/admin')
const productRout = require('./routes/product')
const authRout = require('./routes/auth')
const cartRout = require('./routes/cart')
const ordersRout = require('./routes/orders')

//session
const session =require('express-session')
const SessionStore = require('connect-mongodb-session')(session)
const STORE = new SessionStore({
  uri:'mongodb+srv://amr:amr@cluster0.zd3tt7j.mongodb.net/all-data?retryWrites=true&w=majority',
  collection:'sessions'
})
app.use(session({
  secret: 'this is my secret hash session ..........',
  saveUninitialized: false,
  resave:true,
  store:STORE
}))

// // for auto refresh
// const path = require("path");
// const livereload = require("livereload");
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, "public"));

// const connectLivereload = require("connect-livereload");
// app.use(connectLivereload());

// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });





app.use('/',homeRout)
app.use('/admin',addRout)
app.use('/products',productRout)
app.use('/auth',authRout)
app.use('/cart',cartRout)
app.use('/orders',ordersRout)
// app.use('/images',)



app.use((req,res,next)=>{
    res.status(404).send('Error 404')
})



//mongoose
const mongoose = require("mongoose");

mongoose
  .connect(
    ""
  )
  .then((result) => {
    //run
    app.listen(process.env.PORT  || port, () => {
      console.log(`Example app listening on http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
