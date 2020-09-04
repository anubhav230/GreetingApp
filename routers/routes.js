const greetingContriller = require('../controller/Controller');

const greeting = new greetingContriller();

/**
 * @description Exporting routes
 * @param {function} app http requests 
 */
module.exports = (app) => {
    app.post('/', greeting.create);
    app.get('/:Id', greeting.find);
    app.get('/', greeting.findAll);
    app.delete('/', greeting.delete);
    app.put('/', greeting.modify);
}