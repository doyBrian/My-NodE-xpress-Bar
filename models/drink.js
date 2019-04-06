// Import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');

// Create the burger object
var drink = {
  // Select all burger table entries
  selectAll: function(cb) {
    orm.selectAll('drinks', function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('drinks', cols, vals, function(res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('drinks', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = drink;