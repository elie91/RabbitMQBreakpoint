module.exports = (app) => {
    const User = app.sequelize.models.User;

    return {
        create,
        getAll,
    };


    function create(req, res, next) {
        return User.build({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone
        })
            .save()
            .then((user) => res.status(201).json(user))
            .catch((error) => {
                console.log(error)
                res.status(400).json(error);
            });

    }

    function getAll(req, res, next) {
        return User.findAll(req.query)
            .then((data) => res.json(data))
            .catch((err) => console.log(err) || res.sendStatus(500));
    }

};
