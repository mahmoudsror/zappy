const chai =  require('chai');
const supertest = require('supertest');
const app = require('../../app');
const api = supertest(app);
const common = require('../common');
chai.should();
describe("Tweets Controller ", () => {

    describe("Get Tweets ", () => {
      // Test to Create new user
      it("should return array of tweets", (done) => {
        api.get('/tweets')
        .end((err, res) => {
          res.status.should.be.equal(200);
          res.body.should.be.a('Array');
          done();
        });
      });

      afterEach(done => {
        common.tearDown(done)
      })
    });

});
