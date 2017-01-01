var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fetchAllUsers(function(result, status) {
    return res.send(result);
  });
});

router.get('/:user_id', function(req, res, next) {
  fetchUser(req.params.user_id, function(result, status) {
    return res.send(result);
  });
});


var fetchAllUsers = function(callback) {
  db.User.fetchAll().then( function (success) {
    return callback(success, 200);
  }, function (error) {
    return callback(new Error(error), 400);
  });
};

var fetchUser = function(id, callback) {
  db.User.query({where: {'id' : id}}).fetch().then( function (success) {
    return callback(success, 200);
  }, function (error) {
    return callback(new Error(error), 400);
  });
}

// Lib methods
module.exports.users = {};
module.exports.users.fetchAllUsers = fetchAllUsers;
module.exports.users.fetchUser = fetchUser;

module.exports = router;
