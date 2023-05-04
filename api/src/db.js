require("dotenv").config();
// const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
// Initialize data base.
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('sonda', 'root', 'sonda2023', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Connect and associate data base models.
require('./models')(sequelize);

module.exports = sequelize;