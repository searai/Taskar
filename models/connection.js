const mongoose = require('mongoose');
require('dotenv-flow').config({
    node_env: process.env.NODE_ENV || 'development'
}   
);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> console.log("connected to MongoDb"));
