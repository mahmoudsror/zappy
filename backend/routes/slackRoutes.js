const path = require('path'),
slackContoller = require(path.resolve('controllers','slackController.js'));

module.exports = function(app){
  app.post('/slack/event', slackContoller.eventHendler);
}
