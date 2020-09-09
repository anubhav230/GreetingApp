// importing service
const greetingService = require('../services/GreetingService');
// creating a instance of service class 
//const massage = new GreetingMassage();

module.exports = class GreetingController {

    sayHello(req, res, next) {
        let data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
        greetingService.sayHello(data).then(data => {
            res.status(200).send(data);
        }).catch((err) => {
            res.status(500).send(err)
        });
    }

    findAllGreeting(req, res) {
        greetingService.findAllData().then(data => {
            res.status(200).send(data);
        }).catch((err) => {
            res.status(500).send(err)
        })
    }

    findGreetingById(req, res) {
        let data = {
            id: req.params.Id
        }
        greetingService.findById(data).then(data => {
            res.status(200).send(data);
        }).catch((err) => {
            res.status(500).send(err)
        })
    }

    deleteGreeting(req, res) {
       
        let data = {
            id: req.params.Id
        }
        greetingService.deleteById(data).then(data => {
            res.status(200).send(data);
        }).catch((err) => {
            res.status(500).send(err)
        });
    }

    editGreetingMessage(req, res) {
        let data = {
            id: req.params.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            message: req.body.message
        }
        greetingService.editById(data).then(data => {
            res.status(200).send(data);
        }).catch((err) => {
            res.status(500).send(err)
        })
    }
}