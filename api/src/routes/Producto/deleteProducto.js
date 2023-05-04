const {Producto} = require('../../db').models

module.exports = async function (req, res, next) {
    console.log('----- ROUTE DELETE PRODUCTO ------')


    try {

        const {id} = req.query

        if (!id) res.status(400).json({msg: "No se ingresaron parametros de busqueda"})
        else {

            const element = await Producto.findOne({
                where: {
                    id: id
                }
            })

            if (!element) res.status(400).json({msg: "No se encontro un producto asociado al id"})
            else {

                await element.destroy()

                res.status(200).json({msg: "El elemento fue eliminado con exito"})

            }

        }

    } catch (error) {
        next(error)
    }

}