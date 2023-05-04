const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Curso', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
          },
        title: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        fecha: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT
        },
        horario:{
            type: DataTypes.STRING,
        
        },
        mainImage: {
            type: DataTypes.STRING,
        }

    })
}