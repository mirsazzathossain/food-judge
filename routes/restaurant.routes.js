
const router = require('express').Router();

var restaurant = require('../controllers/restaurant.controllers');
router.get('/add', restaurant.add);
router.post('/add', restaurant.new);
router.get('/nearby', restaurant.near);

module.exports=router;