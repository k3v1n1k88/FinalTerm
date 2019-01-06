var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  username: String,
  password: String,
  permission: Integer,
  list_bank_account: String,
  info:	String,
  history:String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');