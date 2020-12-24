const Router = require("express").Router;
module.exports = (app) => {
    let router = new Router();

    router.get(
        "/",
        app.actions.user.getAll,
    );

    return router;
};