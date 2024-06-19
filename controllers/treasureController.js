const { Op } = require('sequelize');
const Treasure = require('../models/treasure');
const sequelize = require('../config/database');

const findTreasures = async (req, res) => {
    const { latitude, longitude, distance } = req.query;
    const validDistances = [1, 10];

    if (!latitude || !longitude || !distance) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    if (!validDistances.includes(Number(distance))) {
        return res.status(400).json({ message: 'Distance must be 1 or 10.' });
    }

    const radius = distance * 1000;

    try {
        const treasures = await Treasure.findAll({
            where: sequelize.literal(
                `ST_Distance_Sphere(POINT(${longitude}, ${latitude}), POINT(longitude, latitude)) <= ${radius}`
            ),
        });

        res.status(200).json(treasures);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = { findTreasures };