const greetingContriller = require('../controller/Controller');
const greeting = new greetingContriller();

module.exports = (app) => {
    app.post('/', greeting.create);
    app.delete('/', greeting.delete);
}