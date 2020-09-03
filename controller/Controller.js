const GreetingMassage = require('../services/service');
const massage = new GreetingMassage();

module.exports = class GreetingController {
    create = (req, res) => {
        const greeting = massage.getGreeting();
        res.send(greeting);
    }

    delete = (req, res) => {
        const greeting =massage.getGreeting();
        res.send(greeting);
    }

    modify(req, res) {
        const greeting =massage.getGreeting();
        res.send(greeting);
    }
}