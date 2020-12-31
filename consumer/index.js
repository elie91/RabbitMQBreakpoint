const express = require('express');
const mongoose = require('mongoose');
const consumer = require('./consumer');

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
    .then(() => {
        setTimeout(() => {
            consumer.start()
                .then(() => console.log("waiting tasks"))
                .catch(err => console.error(err));
        }, 5000)
    })
    .catch(err => console.log(err))