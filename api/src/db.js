require("dotenv").config();
// const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
// Initialize data base.
const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize('sonda', 'root', 'sonda2023', {
//   host: '192.168.186.39',
//   dialect: 'mysql',
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

const sequelize = new Sequelize(`postgres://sonda:a6UGcoEErO8EfnFXVqbjs3qFIXXMInnE@dpg-ciri5098g3n42olcm4b0-a/sonda`, {
    logging: false,
    native: false,
    dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: true
    }
});

// ${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}

// const sequelize = new Sequelize(`postgres://postgres:123456@localhost/sonda`, {
//     logging: false,
//     native: false,
//     dialectOptions: {
//         useUTC: false,
//         dateStrings: true,
//         typeCast: true
//     }
// });

// Connect and associate data base models.
require('./models')(sequelize);

module.exports = sequelize;