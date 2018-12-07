var mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost:27017/todos_api', {useNewUrlParser : true});
mongoose.Promise = Promise;

module.exports.Products = require('./products');