const express = require("express");
const route = express.Router();
const controller = require("../controllers/cart-controller");
const Guard = require("./guards/auth-guard");


route.get("/", Guard.isAuth,controller.cartItem_cart_get);
route.post("/save", Guard.isAuth,controller.updateCartItem);
route.post("/delete", Guard.isAuth,controller.deleteCartItem);
route.post("/", Guard.isAuth, controller.cartItem_cart_post);

module.exports = route;
