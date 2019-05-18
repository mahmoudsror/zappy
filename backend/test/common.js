const path = require('path');
const Tweets =require(path.resolve('models','Tweets.js'));
module.exports={
  SetUp:done=>{
    done()
  },
  tearDown:done=>{
    Tweets.deleteMany({})
    .then(tweets=>{
      
    })
  //  done()
  }
}