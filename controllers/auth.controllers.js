module.exports.login = function(req, res){
    res.render('login.ejs', {user: req.user});
}

module.exports.signup = function(req, res){
    res.render('signup.ejs');
}


module.exports.logout = function(req, res){
    req.logout();
    res.redirect('/');
}

