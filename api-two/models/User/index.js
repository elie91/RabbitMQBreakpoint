
module.exports = (app, Sequelize) => {
    const User = {
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
        },
        deleted: {
            type: Sequelize.BOOLEAN(),
            defaultValue: false,
            allowNull: false,
        },
    };

    const UserModel = app.sequelize.define("User", User, {
        ...app.config.sequelize.model,
    });

    return UserModel;
};