const chai =  require('chai');
const app = require('../../app');
const path = require('path');
const twitterService = require(path.resolve('services','twitter.js'));
const common = require('../common');
const twitter = new twitterService();
chai.should();

describe('Twitter Service ', () => {
  let tweets = [];
  let server = null;
  before(function(done){
    server = app.listen(done);
  });

  after(done => {
    common.tearDown()
    server.close()
    done();
  })

  it("Get Tweets from Twitter API ", async ()=> {

    const result = await twitter.getTweets();
    tweets = result;
    result.should.be.a('Array');
    
  }); 
  
  it("Format Tweets Before save to DB ", (done)=> {

    const result = twitter.formatTweets(tweets);
    result.should.be.a('Array');
    result[0].tweetId.should.be.a('string');
    result[0].text.should.be.a('string');
    result[0].userName.should.be.a('string');
    result[0].screenName.should.be.a('string');
    result[0].profileImage.should.be.a('string');
    result[0].retweetCount.should.be.a('number');
    result[0].favoriteCount.should.be.a('number');
    result[0].created_Date.should.be.a('string');
    done()  
  });

  it("Save Tweets from Twitter API ", async ()=> {

    const result = await twitter.saveTweets(tweets);
    result.should.be.a('number');
    
  }); 
})