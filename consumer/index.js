const express = require('express');
const mongoose = require('mongoose');

const app = express();
const userRoutes = require('./routes/user');

app.use(express.json());
app.use(userRoutes);

mongoose
    .connect(`mongodb://mongo:9tPf5DmJxBPy@mongo`, {
        dbName: "Worker",
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(3001, () => console.log("listening on port 3001")))
    .catch(err => console.log(err))