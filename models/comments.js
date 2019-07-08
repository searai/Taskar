const mongoose = require('mongoose');
const  ObjectId = mongoose.Schema.Types.ObjectId;


const Schema = mongoose.Schema;

const commentSchema = new Schema({
  body: String,
  author: String,
  linkedTo: ObjectId 
});

const Comment = mongoose.model('Comment', commentSchema );

module.exports =  Comment