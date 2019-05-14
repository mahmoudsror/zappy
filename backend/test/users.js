const chai =  require('chai');
const supertest = require('supertest');
const app = require('../app');
const fs = require('fs');
const api = supertest(app);
const common = require('./common');
chai.should();
describe("Users ", () => {

    describe("Create New User ", () => {
      // Test to Create new user
      it("should return success if user created", (done) => {
        api.post('/users/new')
        .set('content-type', 'multipart/form-data')
        .field('first_name','TestFirstName')
        .field('last_name','TestLastName')
        .field('country_code','EG')
        .field('phone_number','+201021299954')
        .field('birthdate','2018-10-10')
        .field('gender','male')
        .field('email','mahmoudsror@gmail.com')
        .field('password','1234567')
        .attach('avatar',fs.readFileSync(__dirname + '/uploads/logo.png'),'logo.png')
        .end((err, res) => {
          res.status.should.be.equal(201);
          res.body.should.be.a('object');
          done();
        });
      });

      afterEach(done => {
        common.tearDown(done)
      })
    });

});
describe('Auth', () => {
  beforeEach(done => {
    common.SetUp(done);
  })         // Test User Login
  it("should return auth-token if login success ", (done) => {
    api.post('/login')
    .set('content-type', 'application/json')
    .send({
      "phone_number":"+201021299954",
      "password":"123456"
    })
    .end((err, res) => {
      console.log(res.body)
      res.status.should.be.equal(200);
      res.body.should.be.a('object');
      res.body.should.have.property('token')
      res.body.should.have.property('status',200)
        done();
    });
  });  
  afterEach(done => {
    common.tearDown(done)
  })
})