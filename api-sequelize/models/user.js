const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user', {
    firstname: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    lastname: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: { msg: "Email invalid" },
            notEmpty: true,
        },
    },
    phone: {
        type: Sequelize.STRING(15),
    }
});

module.exports = User;
