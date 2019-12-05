var path = require('path');
var express = require('express');
const authRoutes = require('./routes/auth.routes');
const profileRoutes = require('./routes/profile.routes');
const viewRoutes = require('./routes/views.routes');
const passportSetup = require('./passport-setup');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

var app = express();

//set up view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
	maxAge: keys.session.maxAge,
	keys: [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());
console.log(__dirname);
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({extended:true}));

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI,
    {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
        console.log('Connected to mongodb');
    });
  mongoose.connection.on('error', function(err){
    console.log("Could not connect to MongoDB")
  });


//set up routes
app.use('/auth',authRoutes);
app.use('/profile', profileRoutes);
app.use('/', viewRoutes);


app.listen(keys.port, ()=>{
	console.log('Server is running!');
});