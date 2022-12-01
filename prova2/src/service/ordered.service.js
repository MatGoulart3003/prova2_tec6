const { ordered } = require('../model/index')

const create = async data => {
    await ordered.create(data)
}

const remove = async productId => {
    return await ordered.destroy({
        where: {
            id:productId
        }
    })
    
}

const getProductById = async productId => {
    return await ordered.findAll({
        where:{
            id: productId
        }
    })
}

module.exports = {
    create,
    remove,
    getProductById
}