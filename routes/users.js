var router = require('express').Router();
var db = require('../database');


/* GET users listing. */
router.get('/', function(req, res, next) {
  fetchAllUsers(function(result, status) {
    return res.status(status).send(result).end();
  });
});

router.get('/:user_id', function(req, res, next) {
  fetchUser(req.params.user_id, function(result, status) {
    return res.send(result);
  });
});

router.post('/', function(req, res, next) {
  var user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  };
  addUser(user, function(result, status) {
    return res.send(result);
  });
});

router.delete('/:user_id', function(req, res, next) {
  deleteUser(req.params.user_id, function(result, status) {
    return res.send(result).status(200).end();
  });
});

var fetchAllUsers = function(callback) {
  db.query('SELECT * FROM users', function(error, result) {
    if (error) {
      return callback(new Error(error), 400);
    }

    return callback(result.rows, 200);
  });
};

var fetchUser = function(id, callback) {
  db.query('SELECT * FROM users WHERE id = ' + id, function(error, result) {
    if (error) {
      return callback(new Error(error), 400);
    }

    return callback(result.rows, 200);
  });
};

var addUser = function(user, callback) {
  var query = 'INSERT INTO users (first_name, last_name, email) VALUES (\'' +
    user.first_name + '\', \'' +
    user.last_name + '\', \'' +
    user.email + '\')';

  db.query(query, function(error, result) {
    if (error) {
      return callback(new Error(error), 400);
    }

    return callback(result.rows, 200);
  });
}

var deleteUser = function(id, callback) {
  var query = 'DELETE FROM users WHERE id = ' + id;

  db.query(query, function(error, result) {
    if (error) {
      return callback(new Error(error), 400);
    }

    return callback(result, 200);
  });
};

// Lib methods
module.exports.users = {};
module.exports.users.fetchAllUsers = fetchAllUsers;
module.exports.users.fetchUser = fetchUser;

module.exports = router;
