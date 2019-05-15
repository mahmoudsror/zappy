const path = require('path'),
  Tweets = require(path.resolve('models','Tweets.js'));
const stub = require(path.resolve('public','tweets-stub.json'));
module.exports = class twitter {

  async listTweets() {
  
    const tweetsList = await Tweets
      .find({})
      .limit(10);
    return tweetsList;
  
  }
  async getTweets() {
    const savedTweetsCount = await this.saveTweets(stub);
    return savedTweetsCount;
  }
  async saveTweets(tweets) {
    const formattedTweets = await this.formatTweets(tweets);
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