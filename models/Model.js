const mongoose = require('mongoose');
const greetingSchema = mongoose.Schema({
    firstname: {type: String,
        required: [false,'']},
    lastname: {type: String, 
        required: [false,'']},
    message: {type: String,
        required: true},
});
const GreetingSchema = mongoose.model('greeting', greetingSchema);
class GreetingModel {
    create(req) {
        let response = { success: true }
        return new Promise((resolve, reject) => {
            let user = new GreetingSchema({
                firstname: req.firstname,
                lastname: req.lastname,
                message: req.message
            });
            user.save().then(message => {
                response.success = true,
                    response.message = message
                resolve(response);
            }).catch((error) => {
                response.success = false,
                    response.message = {'message':error.message}
                reject(response);//message
            });
        })
    }

    read(req) {
        let response = { success: true }
        return new Promise((resolve, reject) => {
            GreetingSchema.find(req).then(message => {
                response.success = true,
                    response.message = message
                resolve(response);
            }).catch((error) => {
                response.success = false,
                    response.message = error
                reject(response);
            })
        })
    }

    update(req) {
        let response = {success: true}
        return new Promise((resolve, reject) => {
            GreetingSchema.findOneAndUpdate({_id: req._id},
                {
                    firstName: req.firstName,
                    lastName: req.lastName,
                    message: req.message
                }).then(message => {
                response.success = true,
                    response.message = message
                resolve(response);
            }).catch((error) => {
                response.success = false,
                    response.message = error
                reject(response);
            });
        });
    }

    delete(req) {
        let response = { success: true }
        return new Promise((resolve, reject) => {
            GreetingSchema.findByIdAndRemove({ _id: req._id }
            ).then(message => {
                res.success = true,
                    response.message = message
                resolve(response);
            }).catch((error) => {
                response.success = false,
                    response.message = error
                reject(response);
            })
        });
    }
}
module.exports = new GreetingModel();
