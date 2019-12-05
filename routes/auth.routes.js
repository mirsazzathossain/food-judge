const passport = require('passport');

module.exports = function(app){
    var auth = require('./../controllers/auth.controllers');

    //Auth Login
    app.get('/login', auth.login);

    //Auth Signup
    app.get('/signup', auth.signup);

    //Auth with google
    app.get('/auth/google', passport.authenticate('google', {scope: ['profile']}));

    //callback route for google to redirect to
    app.get('/auth/google/redirect', passport.authenticate('google'), auth.home);
}