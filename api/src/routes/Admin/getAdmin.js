const {Admin} = require('../../db').models

module.exports = async function (req, res, next) {
    console.log('---- ROUTE GET ADMIN ----')
    try {

        const {email} = req.query
        
        if (!email) res.status(400).json({msg: "no email"})
        else {

            const user = await Admin.findAll({
                where: {email: email}
            })

            if (user) res.status(200).json(user)
            else res.status(400).json({msg: "no user"})

        }
    } catch (error) {
        next(error)
    }
}