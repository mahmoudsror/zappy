const path = require('path'),
tweetsContoller = require(path.resolve('controllers','tweetsContoller.js'));

module.exports = function(app){

  app.get('/tweets',tweetsContoller.list);
}
