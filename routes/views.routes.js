
const router = require('express').Router();
var cookieParser = require("cookie-parser");
router.use(cookieParser());

var views = require('./../controllers/views.controllers');
router.get('/home', views.home);
router.get('/', views.home);


router.post("/", function(req, res) {
    res.cookie("geometry", `${req.body.lat}:${req.body.long}`, { httpOnly: true });
    res.redirect("/restaurant/nearby");
});



module.exports=router;