const mongoose= require('mongoose');
// eslint-disable-next-line new-cap
const GreetingSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    message: {
        type: String,
    },
});

module.exports = mongoose.model('Greeting', GreetingSchema);