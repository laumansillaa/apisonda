const {Curso} = require('../../db').models

module.exports = async function (req, res, next) {
    console.log('------- ROUTE UPDATE CURSO -------')

    try {

        const {title, fecha, horario, descripcion, mainImage} = req.body
        const {id} = req.query

        if (!id) res.status(400).json({msg: "No se ingresaron parametros de busqueda"})
        if (!title || !fecha || !descripcion || !mainImage) res.status(400).json({msg: "No se completaron todos los campos requeridos"})
        else {

            const curso = await Curso.findByPk(id)

            if (!curso) res.status(400).json({msg: "El id ingresado no corresponde a un elemento en db"})
            else {

                await curso.update({
                    title, 
                    fecha,
                    horario,
                    descripcion,
                    mainImage
                })

                res.status(200).json(curso)

            }
        }
    } catch (error) {
        next(error)
    }
}