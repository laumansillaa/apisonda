const {Curso} = require('../../db').models

module.exports = async function (req, res, next) {
    console.log('------ ROUTE GET CURSO BY ID ---------')
    try {  

        const {id} = req.params
        console.log('id params', id)
        if (!id) res.status(400).json({msg: 'No se ingresaron parametros de busqueda'})
        else {

            const curso = await Curso.findAll({
                where: {
                    id: id
                }
            })
            
            if (curso) res.status(200).json(curso)
            else res.status(400).json({msg: 'no se encontro el curso'})

        }

    } catch (error) {
        next(error)
    }
}