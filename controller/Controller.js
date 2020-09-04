// importing service
const GreetingMassage = require('../services/service');
// creating a instance 
const massage = new GreetingMassage();

module.exports = class GreetingController {
    /**
     * @description function for creating greeting
     * @param {object} req 
     * @param {object} res 
     */
    async create(req, res) {
        try {
            const greetingMessage =await massage.createGreeting(req.body);
            res.send(greetingMessage);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    /**
     * @description function for finding greeting
     * @param {object} req 
     * @param {object} res 
     */
    find(req, res) {
        console.log(req.body)
        const greeting = massage.getMessage(req.body);
        res.send(greeting);
    }
    /**
     * @description function for deleting greeting
     * @param {object} req 
     * @param {object} res 
     */
    delete = (req, res) => {
        console.log(req.body)
        const greeting = massage.getMessage(req.body);
        res.send(greeting);
    }
    /**
     * @description function for modifying greeting
     * @param {object} req 
     * @param {object} res 
     */
    modify(req, res) {
        console.log(req.body)
        const greeting = massage.getMessage(req.body);
        res.send(greeting);
    }
}