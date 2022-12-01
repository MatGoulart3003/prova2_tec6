const service = require('../service/customer.service')

const create = async (req,res) =>{
   if (req.body.name == undefined || req.body.email == undefined){
        res.status(400).send('Invalid data supplied')
   }else{
        await service.create(req.body)
    res.status(201).send('Customer created successfully!')
   }
       
}

const remove = async (req, res) => {
    const CustomerId = req.params.id
    const customer = await service.getCustomerById(CustomerId)
    if (customer == undefined){
        res.status(404).send('Customer not found')
    }else{
        await service.remove(CustomerId)
        res.status(204).send('')
    }
}

module.exports = {
    remove,
    create
}