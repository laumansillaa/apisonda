module.exports = function(sequelize) {
    require('./Producto')(sequelize);
    require('./Curso')(sequelize);
    require('./Admin')(sequelize)

    // const {Notes, Alumns} = sequelize.models;

    // Alumns.belongsToMany(Notes, {through: 'Alumns_Notes'});
    // Notes.hasOne(Alumns);
    // Alumns.belongsToMany(Notes, {through: 'Alumn_Note'});
    // Notes.belongsToMany(Alumns, {through: 'Alumn_Note'});
    

}