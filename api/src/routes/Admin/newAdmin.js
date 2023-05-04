const {Admin} = require('../../db').models

module.exports = async function (req, res, next) {
    console.log('------ CREATE ADMIN ------')
    try {

        const {email, password} = req.body;

        if (email && password) {

            const emailLoweCase = email.toLowerCase()

            const newAdmin = await Admin.create({
                email: emailLoweCase,
                password: password,
                isAdmin: true
            })

            res.status(200).json(newAdmin)
        } else {
            res.status(400).json({msg: "Error al crear el admin"})
        }

    } catch (error) {
        next(error)
    }
}