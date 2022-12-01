const express = require('express')
const router = express.Router()
const customerController = require('../controller/customer.controller')
const productController = require('../controller/product.controller')

router.post('/', customerController.create)
router.post('/', productController.create)
router.delete('/:id', customerController.remove)
router.delete('/:id', productController.remove)

module.exports = router