module.exports = function (app) {
    app.use('/producto', require('./Producto'));
    app.use('/curso', require('./Curso'))
    app.use('/admin', require('./Admin'))
}