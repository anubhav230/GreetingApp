const Greeting = require('../models/Model');
var message;
module.exports = class Hello {
    /**
     * @description method greating greeting message
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


    /**
     * @description method for saving greeting
     * @param {object} reqBody of the request
     */
    async create(reqBody) {
        const message = this.getMessage(reqBody).message;
        const greeting = new Greeting({
            firstName: reqBody.firstName,
            lastName: reqBody.lastName,
            message: message,
        });
        console.log(greeting)
        return await greeting.save()
            .then((item) => {
                return item;
            }).catch((err) => {
                return err;
            });
    }
    /**
     * @description method for getting greeting by Id
     * @param {id} id of the request
     */
    async findById(id) {
        return await Greeting.findById(id).then((data) => {
            if (!data) {
                return new Error(id + 'is not present');
            }
            return data;
        });
    }
    /**
     * @description method for getting all greeting message
     */
    async findAll(){
        return await Greeting.find().then((data) => {
            if (!data) {
                return new Error('is not present');
            }
            return data;
        });
    }
}