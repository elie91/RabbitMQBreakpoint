module.exports = app => {
    app.use('/users', require('./user')(app));
};