const User = require('../models/user');

exports.getUsers = (req, res, next) => {
    User.findAll()
        .then(users => res.status(200).send(users))
        .catch(err => console.log(err))
};

exports.createUser = (req, res, next) => {
    const { firstname, lastname, email, phone } = req.body;
    User.create({ firstname, lastname, email, phone })
        .then((user) => res.status(201).send(user))
        .catch(err => console.log(err))

};