const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const toDoSchema = new Schema({
  body: String,
  author: String

});

const ToDoList = mongoose.model('ToDoList', toDoSchema );

module.exports =  ToDoList