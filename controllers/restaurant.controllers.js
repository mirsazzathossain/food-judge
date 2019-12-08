const Restaurant = require('../models/restaurant.model');

module.exports.add = function(req, res){
    res.render('addRestaurant.ejs', {user: req.user});
}

module.exports.new = function(request, response){
    let restaurant = new Restaurant(request.body);
    restaurant.save(function(err, data){
        if(err){
        return response.status(400).json({msg: "All fields are required!"});
        }
        return response.status(200).json({restaurant:data});
    });
}

module.exports.near = function(req, res){
    res.render('nearbyreasult.ejs', {latitude: req.latitude});
}