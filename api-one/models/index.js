const Sequelize = require("sequelize");
module.exports = app => {
    app.sequelize = new Sequelize({
        database: app.config.sequelize.name,
        dialect: "postgres",
        host: app.config.sequelize.host,
        logging: app.config.sequelize.option.loggin,
        password: app.config.sequelize.password,
        port: app.config.sequelize.port,
        username: app.config.sequelize.user,
        schema: "public",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    });

    // Add models
    app.sequelize.models = {
        User: require("./User")(app, Sequelize)
    };

    app.sequelize
        .authenticate()
        .then(() => {
            console.log(
                "[platform-api][model][sequelize] Connection has been established successfully!",
            );
            // set models relation here

        })
        .then(() => {
            app.sequelize
                .sync({ force: app.config.sequelize.option.force })
                .then(async () => { });
        })
        .catch(err => {
            console.log("platform-api][model][sequelize] Unable to connect to the database:", err);
        });
};
