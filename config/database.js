const {Sequelize} = require('sequelize');

const sequelize = new Sequelize ('kitra', 'root', 'password',{
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;