const chai =  require('chai');
const supertest = require('supertest');
const app = require('../../app');
const api = supertest(app);
const common = require('../common');
const slackWebHookBody = require('../data/eventSubscriptionBody.json');
chai.should();

describe('Slack Controller', () => {

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
  
  it("Message Event should fetch tweets if message equal contains go ", (done) => {
    
    api.post('/slack/event')
    .set('content-type', 'application/json')
    .send(slackWebHookBody)
    .end((err, res) => {
      res.status.should.be.equal(200);
      res.body.should.have.property('challenge',slackWebHookBody.challenge);
      done();
    });
  }); 

  afterEach(done => {
    common.tearDown(done)
  })
})