const User = require('../models/user');
const sendMessage = require('../rabbitmq');


exports.getUsers = (req, res, next) => {
    User.find()
        .then(users => res.status(200).send(users))
        .catch(err => console.log(err))
};

exports.createUser = (req, res, next) => {
    const { firstname, lastname, email, phone } = req.body;
    const user = new User({ firstname, lastname, email, phone });
    user.save()
        .then(() => {
            sendMessage("this is a test")
            res.status(201).send(user)
        })
        .catch(err => console.log(err))

};