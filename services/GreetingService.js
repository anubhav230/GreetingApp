
let model = require('../Models/Model');
const { request } = require('chai');

class GreetingServices {

    sayHello(body) {
        let data
        if (body.firstName == '' && body.lastName == '') {
            data = {
                'message': `Hello World`
            }
        }
        else {
            let firstname = body.firstName == undefined ? '' : body.firstName;
            let lastname = body.lastName == undefined ? '' : body.lastName;
            data = {
                'message': `Welcome to greeting app ${firstname} ${lastname}`
            }
        }
        return model.create(data).then(ans => {
            return ans;
        }).catch((err)=>{
            return err
        });
    }


    findAllData() {
        let id = {}

        return model.read(id).then(ans => {
            return ans;
        }).catch((err)=>{
            return err
        })
    }

    findById(req) {
        let id = {
            _id: req.id
        }
        // console.log(id)
        return model.read(id).then(ans => {
            return ans;
        }).catch((err)=>{
            return err
        }).catch((err)=>{
            return err
        })

        
    }

    deleteById(req){
        let data = {
            _id: req.id
        }
        return model.delete(data).then(ans => {
            return ans;
        }).catch((err)=>{
            return err
        })
    }

    getmessage(reqbody){
        let firstname = reqbody.firstName == undefined ? '' : reqbody.firstName;
        let lastname = reqbody.lastName == undefined ? '' : reqbody.lastName;
        let message = `Welcome to greeting app ${firstname} ${lastname}`
        return { 'message': message };
    }

    editById(req, res) {
        const message = this.getmessage(req)
        let data = {
            _id: req.id,
            firstName: req.firstName,
            lastName: req.lastName,
            message: message.message
        }
        return model.update(data).then(ans => {
            return ans;
        }).catch((err)=>{
            return err;
        })
    }

}

module.exports = new GreetingServices();