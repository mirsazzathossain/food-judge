
const router = require('express').Router();

var views = require('./../controllers/views.controllers');
router.get('/home', views.home);
router.get('/', views.home);

module.exports=router;