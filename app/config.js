var mongoose = require('mongoose');

mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost:5000/data/db/shortlydb'
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection.eror: '));
db.once('open', function(){
  console.log('Mongoose connection open');
});

module.exports = db;
