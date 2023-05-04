const {Curso} = require('../../db').models

module.exports = async function (req, res, next) {

    console.log('------ ROUTE CREATE CURSO ------')

    try {

        const {title, fecha, horario, descripcion, mainImage} = req.body

        if (!title || !fecha || !descripcion || !mainImage) res.status(400).json({msg: "No se ingresaron todos los campos"})
        
        if (title && fecha && horario && descripcion && mainImage) {
            const newCurso = await Curso.create({
                title,
                fecha,
                horario,
                descripcion,
                mainImage
            })
            res.status(200).json(newCurso)
        } else {
            res.status(400).json({msg: "Faltan campos"})

        }

    } catch (error) {
        next(error)
    }



}