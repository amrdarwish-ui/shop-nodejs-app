const express = require('express')
const route = express.Router()
const Product = require("../models/productSchema");
const controller = require('../controllers/product-controller')

route.get('/:id',controller.product_product_get)

module.exports = route