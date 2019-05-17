const chai =  require('chai');
const supertest = require('supertest');
const app = require('../../app');

const common = require('../common');
chai.should();
    describe("Twitter Controller", () => {
      let api = null;
      let server = null;
      before(function(done){
        server = app.listen(done);
        api = supertest.agent(server);
      });

      // after(done => {
      //   common.tearDown(done);
      //   server.close();
        
      // })

      it("should return array of tweets", (done) => {
        api.get('/tweets')
        .end((err, res) => {
          res.status.should.be.equal(200);
          res.body.should.be.a('Array');
          done();
        });
      });


    
    });
