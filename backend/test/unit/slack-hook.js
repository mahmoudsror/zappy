const chai =  require('chai');
const supertest = require('supertest');
const app = require('../../app');
const common = require('../common');
const slackWebHookBody = require('../data/eventSubscriptionBody.json');
chai.should();

describe('Slack Controller', () => {
  
  let api = null;
  let server = null;
  before(function(done){
    server = app.listen(done);
    api = supertest.agent(server);
  });

  // after(done => {
  //  // common.tearDown(done);
  //   server.close();
  // })

  it("Event subscription returns 200 if challenge equal webhook challenge ", (done) => {
    
    api.post('/slack/event')
    .set('content-type', 'application/json')
    .send(slackWebHookBody)
    .end((err, res) => {
      res.status.should.be.equal(200);
      res.body.should.have.property('challenge',slackWebHookBody.challenge);
      done();
    });
  }); 
  

})