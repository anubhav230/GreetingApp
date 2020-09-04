const GreetingMassage = require('../services/service');
const massage = new GreetingMassage();

module.exports = class GreetingController {

    create = (req, res) => {
        console.log(req.body)
        const greeting = massage.getMessage(req.body);
        res.send(greeting); 
    }

    find(req, res) {
        console.log(req.body)
        const greeting = massage.getMessage(req.body);
        res.send(greeting);
    }

    delete = (req, res) => {
        console.log(req.body)
        const greeting = massage.getMessage(req.body);
        res.send(greeting);
    }

    modify(req, res) {
        console.log(req.body)
        const greeting = massage.getMessage(req.body);
        res.send(greeting);
    }
}