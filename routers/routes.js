//const greetingContriller = require('../controller/GreetingController');
const greetingController = require('../controller/GreetingController');
const Controller = new greetingController();

/**
 * @description Exporting routes
 * @param {function} app http requests 
 */
module.exports = (app) => {
    app.post('/', Controller.sayHello);
    app.get('/', Controller.findAllGreeting);
    app.get('/:Id', Controller.findGreetingById);
    app.delete('/:Id', Controller.deleteGreeting);
    app.put('/:id', Controller.editGreetingMessage);
}