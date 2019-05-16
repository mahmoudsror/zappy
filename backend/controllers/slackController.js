const path = require('path');
const twitterService = require(path.resolve('services','twitter.js'));
const twitter = new twitterService();

module.exports = {

  eventHendler: async (req,res)=>{
    await twitter.getTweets();
    return res.send(req.body.challenge)
  }

}