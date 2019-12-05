// initial dummy data for articles and user

var mongoose = require('mongoose');
var User = require('./models/User.js');
// mongoose.connection.dropDatabase(error => {
//   console.log('Database not dropped');
//   //process.exit(0);
// });

var user = {
    email: 'abc@def.com',
    password: '12345678',
    firstName: 'TD',
    lastName: 'BD',
    username: 'TD-BD',
    provider: 'local'
};
user = new User(user);
user.save();


