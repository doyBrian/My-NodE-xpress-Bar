// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var drink = require('../models/drink.js');

// Create the routes and associated logic
router.get('/', function(req, res) {
  drink.selectAll(function(data) {
    var hbsObject = {
      drinks: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/drinks', function(req, res) {
  drink.insertOne([
    'drink_name'
  ], [
    req.body.drink_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/drinks/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  drink.updateOne({
    pick_up: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
