const { customer } = require('../model/index')

const create = async data => {
    await customer.create(data)
}

const remove = async productId => {
    return await customer.destroy({
        where: {
            id:productId
        }
    })
    
}

const getCustomerById = async customerId => {
    return await customer.findAll({
        where:{
            id: customerId
        }
    })
}

module.exports = {
    create,
    remove,
    getCustomerById
}