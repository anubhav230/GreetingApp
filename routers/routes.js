const greetingContriller = require('../controller/Controller');

const greeting = new greetingContriller();

/**
 * @description Exporting routes
 * @param {function} app http requests 
 */
module.exports = (app) => {
    app.post('/', greeting.create);
    app.get('/', greeting.find);
    app.delete('/', greeting.delete);
    app.put('/', greeting.modify);
}