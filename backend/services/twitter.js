const path = require('path'),
  Tweets = require(path.resolve('models','Tweets.js'));
const stub = require(path.resolve('public','tweets-stub.json'));
const twitterAPI = require('twitter');
module.exports = class twitter {

  async listTweets() {
  
    const tweetsList = await Tweets
      .find({})
      .limit(10);
    return tweetsList;
  
  }
  async getTweets() {
    const client = new twitterAPI({
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.ACCESS_TOKEN_KEY,
      access_token_secret: process.env.ACCESS_TOKEN_SECRET
    });

    const params = {screen_name: 'nodejs'};
    const tweetsResponse = await client.get('statuses/user_timeline', params);
console.log(tweetsResponse)
    const savedTweetsCount = await this.saveTweets(tweetsResponse);
    return savedTweetsCount;
  }
  async saveTweets(tweets) {
    const formattedTweets = await this.formatTweets(tweets);
    console.log("formattedTweets : ", formattedTweets)
    const createdTweets = await Tweets.collection.insertMany(formattedTweets);

    return createdTweets.result.n;
  
  }

  async formatTweets(tweets) {

    const formattedTweets = [];
    
    tweets.forEach(tweet => {
      formattedTweets.push({
        tweetId: tweet.id_str,
        text: tweet.text,
        userName: tweet.user.name,
        screenName: tweet.user.screen_name,
        profileImage: tweet.user.profile_image_url,
        retweetCount: tweet.retweet_count,
        favoriteCount: tweet.favorite_count,
        created_Date: tweet.created_at
      })
    });
    
    return formattedTweets;
  }

}