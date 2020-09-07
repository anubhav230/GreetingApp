// importing db Configration
const dbConfig = require('./config/database.config.js');

//importing mongoose
const mongoose = require('mongoose');

 // importing express
const express = require('express');

// importing bodyParser
const bodyParser = require('body-parser');

 // instance of express
const app = express();

 //parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse requests of content-type - application/json
app.use(bodyParser.json());

 // importing routers
require('./routers/routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

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