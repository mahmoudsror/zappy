const mongoose = require('mongoose');
const Schema = mongoose.Schema
const TweetsSchema = new mongoose.Schema({
  tweetId: String,
  text: String,
  userName: String,
  screenName: String,
  profileImage: String,
  retweetCount: String,
  favoriteCount: String
},
{ timestamps: true })

var TweetsModel = mongoose.model('tweets',TweetsSchema)

module.exports = TweetsModel
