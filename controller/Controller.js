const massage = require('../services/service');
const massage1 = new massage();
exports.create = (req, res) => {
    const greeting = massage1.getHello();
    res.send(greeting);
}