const mongoose = require('mongoose');
const greetingSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    message: String,
});

const Schema = mongoose.model('userDetails', greetingSchema);

class GreetingModel{
    create(reqBody, res){
        const greeting = new Schema();
        greeting.firstname = greeting.firstname;
        greeting.lastname = greeting.lastname;
        greeting.message = greeting.lastname;
    }
}


module.exports = mongoose.model('userDetails', greetingSchema);


