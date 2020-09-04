// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
// create express app

//module.exports = app = express();
const app = express();
//require('./routers/routes.js')(app);

app.use(bodyParser.urlencoded({ extended: false }))

// parse requests of content-type - application/json

app.use(bodyParser.json());
require('./routers/routes.js')(app);

// app.get('/', (req, res) => {
//     //console.log(req.body)
//     res.send({"message": "Welcome to greeting app"});
// });


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