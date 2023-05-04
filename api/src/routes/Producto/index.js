const router = require('express').Router();

router.post('/createproducto', require('./createProducto'))
router.delete('/deleteProducto', require('./deleteProducto'))
router.put('/updateproducto', require('./updateProducto'))
router.get('/getproducto', require('./getProducto'))
router.get('/productodetail', require('./detailProducto'))
// router.get('/getprodbyid', require('./getProdById'))

module.exports = router;