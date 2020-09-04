const mongoose = require('mongoose');
const greetingSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    message: String,
});

module.exports = mongoose.model('userDetails', greetingSchema);