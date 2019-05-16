const path = require('path');
const twitterService = require(path.resolve('services','twitter.js'));
const twitter = new twitterService();

module.exports = {

  list: async (req,res) => {
    const tweets = await twitter.listTweets();
    return res.status(200).send(tweets)
  }

}