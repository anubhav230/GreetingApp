module.exports = (app) => {
    const greeting = require('../controller/Controller');
    app.post('/', greeting.create);
}