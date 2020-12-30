const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: "api",
    dialect: "mysql",
    host: "mysql",
    username: "elie",
    password: "mypassword",
    port: "3306"
});

module.exports = sequelize;

