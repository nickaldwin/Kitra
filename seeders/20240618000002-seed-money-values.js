'use strict';

const { MoneyValue } = require('../models');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const moneyValuesData = [
            { treasure_id: 100, amt: 20 },
            { treasure_id: 101, amt: 25 },
            { treasure_id: 102, amt: 20 },
            { treasure_id: 103, amt: 25 },
            { treasure_id: 107, amt: 30 },
            { treasure_id: 108, amt: 30 },
            { treasure_id: 109, amt: 30 },
        ];

        await queryInterface.bulkInsert('MoneyValues', moneyValuesData, {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('MoneyValues', null, {});
    }
};
