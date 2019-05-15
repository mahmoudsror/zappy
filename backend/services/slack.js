const path = require('path');
const twitterService = require(path.resolve('services','twitter.js'));
const { RTMClient } = require('@slack/rtm-api');
const rtm = new RTMClient(process.env.SLCACK_BOT_ACCESS_TOKEN);
const twitter = new twitterService();
class slack{

  async connectToSlack() {

    rtm.on('message', async (event) => {
      const text = event.text;
      if( text.includes("go") ) {
      await twitter.getTweets();
    }
  });
  
  ( async () => {
    await rtm.start();
  })();
  
  }
}

module.exports = slack