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

module.exports = {
    create,
    remove
}