const massage = require('../services/service');
const massage1 = new massage();

module.exports = class GreetingController {
    create = (req, res) => {
        const greeting = massage1.getGreeting();
        res.send(greeting);
    }

    delete = (req, res) => {
        const greeting =massage1.deleteGreeting();
        res.send(greeting);
    }
}