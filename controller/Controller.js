// importing service
const GreetingMassage = require('../services/service');
// creating a instance of service class 
const massage = new GreetingMassage();

module.exports = class GreetingController {
    /**
     * @description function for creating greeting
     * @param {object} req 
     * @param {object} res 
     */
    async create(req, res) {
        try {
            const greetingMessage = await massage.create(req.body);
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
    async find(req, res) {
        console.log(req.body)
        try {
            const greetingMessage = await massage.findById(req.params.Id);
            res.send(greetingMessage);
        } catch (err) {
            res.send(err);
        }
    }
    /**
     * @description function for finding all greeting messages
     * @param {object} req 
     * @param {object} res 
     */
    async findAll(req, res) {
        try {
            const greetingMessage = await massage.findAll();
            res.send(greetingMessage);
        } catch (err) {
            res.send(err);
        }
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