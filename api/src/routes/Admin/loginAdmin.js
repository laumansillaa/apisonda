const {Admin} = require('../../db').models

module.exports = async function (req, res, next) {
    console.log('------ LOGIN ADMIN ------')
    try {

        const {email, password} = req.body;
        console.log(email, password)
        if (email && password) {

            const emailLowerCase = email.toLowerCase()
            console.log('tolowecase', emailLowerCase)
            const newAdmin = await Admin.findAll({
                where: {
                    email: emailLowerCase
                }
            })
            // console.log('new admin', newAdmin)
            if (!newAdmin) {
                res.status(400).json({msg: "No se encontro email"})
            } else {
                if (newAdmin[0].password === password) {
                    res.status(200).json(newAdmin)
                } else {
                    res.status(400).json({msg: "Usuario o contraseña incorrectos"})
                }
            }
        } else {
            res.status(400).json({msg: "Error al crear el admin"})
        }

    } catch (error) {
        next(error)
    }
}