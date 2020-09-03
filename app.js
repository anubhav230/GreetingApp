// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
require('../greetingapp/routers/routes.js')(app);
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json

app.use(bodyParser.json());
// define a simple route

app.get('/', (req, res) => {
    res.json({"message": "Welcome to greeting app"});
});

// listen for requests

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true, useFindAndModify: false,
    useCreateIndex: true, useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});