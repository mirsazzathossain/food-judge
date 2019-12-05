
module.exports = function(app){
    var views = require('./../controllers/views.controllers');
    app.get('/home', views.home);
}