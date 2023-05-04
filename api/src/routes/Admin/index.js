const router = require('express').Router();

router.post('/newadmin', require('./newAdmin'))
router.post('/login', require('./loginAdmin'))
router.get('/getadmin', require('./getAdmin'))

module.exports = router;