const express = require('express');
const mongoose = require('mongoose');

const app = express();
const userRoutes = require('./routes/user');

app.use(express.json());
app.use(userRoutes);

mongoose
    .connect(`mongodb://mongo:9tPf5DmJxBPy@mongo`, {
        dbName: "Mongo",
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(3000, () => console.log("listening on port 3000")))
    .catch(err => console.log(err))