const greetingContriller = require('../controller/Controller');
const greeting = new greetingContriller();
module.exports = (app) => {
    app.post('/', greeting.create);
    app.get('/', greeting.find);
    app.delete('/', greeting.delete);
    app.put('/', greeting.modify);
}