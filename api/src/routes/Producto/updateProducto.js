const {Producto} = require('../../db').models

module.exports = async function (req, res, next) {
    console.log('------- ROUTE UPDATE PRODUCTO -------')

    try {

        const {nombre, descripcion, img, catalogo, categoria, prov} = req.body
        const {id} = req.query

        if (!id) res.status(400).json({msg: "No se ingresaron parametros de busqueda"})
        if (!nombre && !descripcion && !img && !catalogo && !categoria && !prov) res.status(400).json({msg: "No se completaron todos los campos requeridos"})
        else {

            const prod = await Producto.findByPk(id)

            if (!prod) res.status(400).json({msg: "El id ingresado no corresponde a un elemento en db"})
            else {

                await prod.update({
                    nombre, 
                    descripcion,
                    img,
                    catalogo,
                    categoria,
                    prov
                })

                res.status(200).json(prod)

            }
        }
    } catch (error) {
        next(error)
    }
}