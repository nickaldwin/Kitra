const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MoneyValue = sequelize.define('MoneyValue', {
    treasure_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amt: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = MoneyValue;
