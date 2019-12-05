module.exports.login = function(req, res){
    res.render('login.ejs');
}

module.exports.signup = function(req, res){
    res.render('signup.ejs');
}

module.exports.home = function(req, res){
    res.redirect('/home/');
}