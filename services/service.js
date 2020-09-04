const Greeting = require('../models/Model');
var message;
module.exports = class Hello {
    /**
     * method greating greeting message
     * @param {object} body of the request
     * @return {object} message
     */
    getMessage(body) {  
        if (body.firstName == "" && body.lastName == "") {
            message = `Hello World`
        }
        else {
            let firstname = body.firstName == undefined ? '' : body.firstName;
            let lastname = body.lastName == undefined ? '' : body.lastName;
            message = `Welcome to greeting app ${firstname} ${lastname}`
        }
        return { 'message': message }
    }


    
    async createGreeting(reqBody) {
        const message = this.getMessage(reqBody).message;

        const greeting = new Greeting({
            firstName: reqBody.firstName,
            lastName: reqBody.lastName,
            message: message,
        });
        return await greeting.save()
            .then((item) => {
                return item;
            })
            .catch((err) => {
                return err;
            });
    }
}