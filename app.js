
/**
 * @description importing db Configration
 */
const dbConfig = require('./config/database.config.js');
/**
 * @description importing mongoose
 */
const mongoose = require('mongoose');
/**
 * @description importing express
 */
const express = require('express');
/**
 * @description importing bodyParser
 */
const bodyParser = require('body-parser');

/**
 * @description instance of express
 */
const app = express();
/**
 * @description parse requests of content-type - application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: true }))
/**
 * @description parse requests of content-type - application/json
 */
app.use(bodyParser.json());
/**
 * @description importing routers
 */
require('./routers/routes.js')(app);
/**
 * @description listen for requests
 */
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
/**
 * @description Connecting to the database
 */
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true, useFindAndModify: false,
    useCreateIndex: true, useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});