var crypto = require('crypto');
var mongoose = require('mongoose');

var linkSchema = mongoose.Schema({
  visits: {type: Number, min: 0},
  link: String,
  title: {type: String},
  url: {type: String},
  base_url: {type: String},
  code: {type: String},
  //timestamp: {type: Date, default: Date.now}
});

var Link = mongoose.model('Link', linkSchema);

var createSha = function(url){
  var shasum = crypto.createHash('sha1');
  shasum.update('url');
  return shasum.digest('hex').slice(0, 5);
};

linkSchema.pre('save', function(next){
  var code = createSha(this.url);
  this.code = code;
  next();
});

module.exports = Link;
