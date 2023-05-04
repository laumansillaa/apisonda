const {Producto} = require('../../db').models

module.exports = async function (req, res, next) {
    console.log('------ ROUTE GET PROD BY ID ---------')
    try {  

        const {id} = req.params
        console.log('id params', id)
        if (!id) res.status(400).json({msg: 'No se ingresaron parametros de busqueda'})
        else {

            const prod = await Producto.findAll({
                where: {
                    id: id
                }
            })
            
            if (prod) res.status(200).json(prod)
            else res.status(400).json({msg: 'no se encontro el producto'})

        }

    } catch (error) {
        next(error)
    }
}