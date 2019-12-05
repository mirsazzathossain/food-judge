const mongoose = require("mongoose")
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    username: {
        type: String,
        required: "Must require user name"
    },
    googleId: {
      type: String, 
      default: ''
    },
    password: {
      type: String,
      default: ''
    }
});


userSchema.methods.hashPassword = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.comprePassword = function(password, hash){
  return bcrypt.compareSync(password, hash);
}




const User = mongoose.model('user', userSchema);

module.exports = User;
