//const Greeting = require('../models/Model');
var message;
module.exports = class Hello {
    getMessage(obj) {  
        if (obj.firstName == "" && obj.lastName == "") {
            message = `Hello World`
        }
        else {
            let firstname = obj.firstName == undefined ? '' : obj.firstName;
            let lastname = obj.lastName == undefined ? '' : obj.lastName;
            message = `Welcome to greeting app ${firstname}${lastname}`
        }
        return { 'message': message }
    }
}