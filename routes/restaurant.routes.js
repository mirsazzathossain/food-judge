
const router = require('express').Router();

var restaurant = require('../controllers/restaurant.controllers');
router.get('/add', restaurant.add);
router.post('/add', restaurant.new);

module.exports=router;