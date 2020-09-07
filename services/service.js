const Greeting = require('../models/Model');
var message;
module.exports = class Hello {
    /**
     * @description method greating greeting message
     * @param {object} body of the request
     * @return {object} message
     */
    getMessage(body) {
        if (typeof body.firstName === undefined && typeof body.lastName === undefined) {
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
    create(reqBody, res, callback) {
        let message = this.getMessage(reqBody).message;
        const greeting = new Greeting({
            firstName: reqBody.firstName,
            lastName: reqBody.lastName,
            message: message,
        });
        greeting.save().then((item)=>{
            callback(res, item);
        }).catch((err)=>{
           callback(res, {'error':'error'})
        })
    }
    /**
     * @description method for getting greeting by Id
     * @param {string} id of the request
     */
    findById(id, res, callback) {
        Greeting.findById(id).then((item) => {
            if (!item)
                throw new Error();
            callback(res, item)
        });
    }
    /**
     * @description function for fild all greeting message
     * @param {string} id id of the greeting
     */
    findAll(res, callback) {
        Greeting.find().then((item) => {
            if (!item)
                throw new Error();
            callback(res, item);
        })
    }
    
    deleteGreeting(req, callback) {
        let id = req.params.Id;
        Greeting.findByIdAndRemove(id, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        });
    }

    editGreeitng(req, res, callback){
        const message = this.getMessage(req.body)
        let id = req.params.Id;
        Greeting.findByIdAndUpdate(id, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            message: message.message,
        }).then((item)=>{
            if(!item){
                throw new Error();
            }
            callback(res, item);
        })
    }
}