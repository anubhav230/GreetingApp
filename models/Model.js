const mongoose = require('mongoose');

const greetingSchema = mongoose.Schema({

    firstname: String,
    lastname: String,
    message: String,
},
    {
        timestamps: true,

    }
);

module.exports = mongoose.model('userDetails', greetingSchema);