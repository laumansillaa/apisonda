const {Producto} = require('../../db').models

module.exports = async function (req, res, next) {
    console.log('-------- ROUTE DETAIL PRODUCTO --------')

    try {

        const {id} = req.query;

        if (!id) res.status(400).json({msg: "No se ingresaron parametros de busqueda"})
        else {

            const data = await Producto.findByPk(id)

            if (!data) res.status(400).json({msg: "No se encontraron elementos asociados al id"})

            res.status(200).json(data)

        }

    } catch (error) {
        next(error)
    }
}