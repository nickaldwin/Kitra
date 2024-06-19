const User = require('../models/user');
const Treasure = require('../models/treasure');
const MoneyValue = require('../models/moneyValue');

const getUserDetails = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id, {
            include: [
                {
                    model: Treasure,
                    as: 'treasures',
                    include: [
                        {
                            model: MoneyValue,
                            as: 'money_values',
                        },
                    ],
                },
            ],
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = { getUserDetails };
