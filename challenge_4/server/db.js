var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/database';
mongoose.connect(mongoDB, { useNewUrlParser: true });   

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;