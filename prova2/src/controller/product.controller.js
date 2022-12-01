const service = require('../service/product.service')

const create = async (req,res) =>{
   if (req.body.name == undefined || req.body.value == undefined){
        res.status(400).send('Invalid data supplied')
   }else{
        await service.create(req.body)
    res.status(201).send('Product created successfully!')
   }
       
}

const remove = async (req, res) => {
    const productId = req.params.id
    const product = await service.getProductById(productId)
    if (product == undefined){
        res.status(404).send('Product not found')
    }else{
        await service.remove(productId)
        res.status(204).send('')
    }
}

module.exports = {
    remove,
    create
}