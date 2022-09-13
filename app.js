const mongoose = require('mongoose');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const apiRoutes = require('./server/routes/api');
const app = express();

require("dotenv/config");

const PORT = 5000;

// middleware
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use('/students', apiRoutes);

// mongoDB connector
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            // better set Database Access > MongoDB Roles > to atlasAdmin@admin
            console.log({ message: "Successfully connected to MongoDB." });
        })
        .catch((err) => {
            console.log({ message: err });
        });

// localhost server
app.listen(PORT, () => {
    console.log(`Server 🏃 on http://localhost:${PORT}`);
})