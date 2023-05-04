const {Curso} = require('../../db').models

module.exports = async function (req, res, next) {
    console.log('--------- ROUTE GET PRODUCTOS --------')

    try {

        const allData = await Curso.findAll()

        if (allData) res.status(200).json(allData)

        else {
            res.status(400).json({msg: "No se encontraron resultados"})
        }

    } catch (error) {
        next(error)
    }


}