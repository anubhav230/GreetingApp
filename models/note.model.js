const mongoose = require('mongoose');
const greetingSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    message: String
});

module.exports = mongoose.model('userDetails', greetingSchema);