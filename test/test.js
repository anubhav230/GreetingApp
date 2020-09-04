  
const chai = require('chai');
const chaiHttp = require('chai-http');
const {assert} = require('chai');
const app = require('../app.js')

chai.use(chaiHttp);

let result;

describe('Greeting App Test', () => {
    it('POST /greeting with first name', (done) => {
        chai.request(app)
            .post('/')
            .send({
                'firstName': '',
                'lastName': '',
            })
            .end((err, response) => {
                result = response.body.message;
                assert.equal(result, 'Hello world');
                done();
            });
    });
});