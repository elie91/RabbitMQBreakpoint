const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: "postgres",
    dialect: "postgres",
    host: "postgres",
    username: "postgres",
    password: "elie1996",
    port: "5432",
    schema: "public",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

module.exports = sequelize;

