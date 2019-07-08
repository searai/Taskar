const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const Schema = mongoose.Schema;

const replySchema = new Schema({
  body: String,
  author: String,
  linkedTo: ObjectId

});

const Reply = mongoose.model('Reply', replySchema );

module.exports =  Reply