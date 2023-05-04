const router = require('express').Router();

router.post('/createcurso', require('./createCurso'))
router.delete('/deletecurso', require('./deleteCurso'))
router.put('/updatecurso', require('./updateCurso'))
router.get('/getcurso', require('./getCurso'))
router.get('/cursodetail', require('./detailCurso'))
// router.get('/getcursobyid', require('./getCursoById'))

module.exports = router;