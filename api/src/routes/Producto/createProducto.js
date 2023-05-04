const {Producto} = require('../../db').models

module.exports = async function (req, res, next) {
    console.log('------ ROUTE CREATE PRODUCTO -------')

    try {

        const {nombre, descripcion, img, catalogo, categoria, prov} = req.body

        if (!nombre || !descripcion || !categoria || !prov) res.status(400).json({msg: "No se ingresaron todos los campos"})

        if (nombre && descripcion && categoria && prov) {

            const newProd = await Producto.create({
                nombre, 
                descripcion,
                img,
                catalogo,
                categoria,
                prov
            })

            res.status(200).json(newProd)

        } else {
            res.status(400).json({msg: "Faltan campos"})
        }

    } catch (error) {
        next(error)
    }

}