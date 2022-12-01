const express = require('express')
const router = express.Router()
const customerController = require('../controller/customer.controller')
const productController = require('../controller/product.controller')
const orderedController = require('../controller/ordered.controller')

router.post('/customers', customerController.create)
router.post('/products', productController.create)
router.post('/ordereds', orderedController.create)
router.delete('/customers/:id', customerController.remove)
router.delete('/products/:id', productController.remove)
router.delete('/ordereds/:id', orderedController.remove)


module.exports = router