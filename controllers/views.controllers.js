module.exports.home = function(req, res){
    res.render('home.ejs', {user: req.user});
}

module.exports.getGeo = function(req, res){
    res.render('nearbyreasult.ejs', {lat: req.body.lat, long: req.body.long});
}

