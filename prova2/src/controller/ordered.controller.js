const service = require('../service/ordered.service')

const create = async (req,res) =>{
   if (req.body.customer_id == undefined || req.body.product_id == undefined || req.body.order_date == undefined){
        res.status(400).send('Invalid data supplied')
   }else{
        await service.create(req.body)
    res.status(201).send('Ordered created successfully!')
   }
       
}

const remove = async (req, res) => {
    const productId = req.params.id
    const product = await service.getProductById(productId)
    if (product == undefined){
        res.status(404).send('Ordered not found')
    }else{
        await service.remove(productId)
        res.status(204).send('')
    }
}

module.exports = {
    remove,
    create
}