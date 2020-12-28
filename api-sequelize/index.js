const express = require('express');

const app = express();
const sequelize = require('./util/database');
const User = require('./models/user');
const userRoutes = require('./routes/user');

app.use(express.json());
app.use(userRoutes);

const test = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        return console.error('Unable to connect to the database:', error);
    }

}
test()

sequelize
    .sync({ force: true })
    .then(() => app.listen(3001))
    .then(() => console.log("listening on port 3001"))
    .catch(err => console.log(err));

