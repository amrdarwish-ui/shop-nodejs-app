const express = require('express')
const route = express.Router()
const controller = require('../controllers/home-controller')


route.get('/',controller.product_index_get)


module.exports = route