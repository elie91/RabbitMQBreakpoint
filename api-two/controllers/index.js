module.exports = app => {
    app.actions = {
        user: require('./user.js')(app), // Load your action
    };
};
