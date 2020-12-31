const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
        },
    },
    {
        collection: "Users",
    }
);

const User = mongoose.model("User", Schema);

module.exports = User;
