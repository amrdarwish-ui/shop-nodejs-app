const express = require("express");
const route = express.Router();
const authGuard = require("./guards/auth-guard");
const Order = require("../models/orderSchema");
const CartItem = require("../models/cartScheme");

route.post("/", authGuard.isAuth, (req, res) => {
  
});

module.exports = route;
