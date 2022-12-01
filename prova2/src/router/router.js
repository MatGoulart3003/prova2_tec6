const express = require('express')
const router = express.Router()
const customerController = require('../controller/customer.controller')
const productController = require('../controller/product.controller')

router.post('/customers', customerController.create)
router.post('/products', productController.create)
router.delete('/customers/:id', customerController.remove)
router.delete('/products/:id', productController.remove)

module.exports = router