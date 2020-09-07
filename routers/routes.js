const greetingContriller = require('../controller/GreetingController');

const greeting = new greetingContriller();

/**
 * @description Exporting routes
 * @param {function} app http requests 
 */
module.exports = (app) => {
    app.post('/', greeting.create);
    app.get('/:Id', greeting.find);
    app.get('/', greeting.findAll);
    app.delete('/:Id', greeting.delete);
    app.put('/:Id', greeting.modify);
    app.patch('/')
}