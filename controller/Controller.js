const GreetingMassage = require('../services/service');
const massage = new GreetingMassage();

module.exports = class GreetingController {

    async create(req, res) {
        try {
            const greetingMessage =await massage.createGreeting(req.body);
            res.send(greetingMessage);
        } catch (err) {
            res.status(500).send(err);
        }
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