const server = require('./src/app.js');
const db = require('./src/db.js');
const {Producto, Admin} = require('./src/db').models
const data = require('./src/data/productos.js')
const cron = require('node-cron')

const task = cron.schedule('*/14 * * * *', () => {
    console.log('Tarea ejecutada cada 14 minutos');
  });
  task.start();

db.sync({force: false}).then(async () => {

    try {
        // console.log('Data', data.length)
        // for (var i = 0; i<data.length; i++) {
        //     await Producto.create({
        //         nombre: data[i].nombre,
        //         descripcion: data[i].descripcion,
        //         img: data[i].img,
        //         catalogo: data[i].catalogo,
        //         categoria: data[i].categoria,
        //         prov: data[i].prov
        //     }).then((response) => {
        //         console.log('Nuevo Producto')
        //     })
        // }

        // await Admin.create({
        //     email: "sonda@admin.com",
        //     password: "sonda",
        //     isAdmin: true
        // })

    } catch (error) {
        console.log(error)
    }

    server.listen(3001, () => {
        console.log('is listening at 3001')
    })
})