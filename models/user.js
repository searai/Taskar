const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  email: String,
  password:String,
  loginAttempts: { type: Number, default: 0 },
  startTime:Number

});

const User = mongoose.model('User', userSchema );

module.exports =  User