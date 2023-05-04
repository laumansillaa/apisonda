const server = require('./src/app.js');
const db = require('./src/db.js');
const {Producto} = require('./src/db').models
const data = require('./src/data/productos.js')
db.sync({force: true}).then(async () => {

    try {
        console.log('Data', data.length)
        for (var i = 0; i<data.length; i++) {
            await Producto.create({
                nombre: data[i].nombre,
                descripcion: data[i].descripcion,
                img: data[i].img,
                catalogo: data[i].catalogo,
                categoria: data[i].categoria,
                prov: data[i].prov
            }).then((response) => {
                console.log('Nuevo Producto')
            })
        }

    } catch (error) {
        console.log(error)
    }

    server.listen(3001, () => {
        console.log('is listening at 3001')
    })
})