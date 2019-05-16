const path = require('path');
const twitterService = require(path.resolve('services','twitter.js'));
const twitter = new twitterService();

module.exports = {

  eventHendler: async (req,res)=>{
    
    const { type } = req.body;
    if( type == "url_verification" ) {
      return res.send({
        challenge:req.body.challenge
      })
    }

    if( type == "event_callback" && req.body.event.type=="message" ) {
      let { text } = req.body.event;
      text = text.toLowerCase();
      if(text.includes('go')){
        await twitter.getTweets();
      }
    }
  }

}