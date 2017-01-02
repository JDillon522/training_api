var router = require('express').Router();
var db = require('../database');


/* GET users listing. */
router.get('/', function(req, res, next) {


  // client.connect(function(err, client, done) {
  //   if(err) {
  //     return console.error('error fetching client from pool', err);
  //   }
    db.query('SELECT * FROM users', function(err, result) {
      //call `done()` to release the client back to the pool
      // done();

      if(err) {
        console.error('error running query', err);
        res.status(400).send(err).end();

      }
      //output: 1
      res.status(200).send(result).end();
    });
  // });

  // fetchAllUsers(function(result, status) {
  //   return res.send(result);
  // });
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
  db.Users.fetch().then( function (success) {
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
};

var addUser = function(user, callback) {
  db.User.set(user).save(null, {method: 'insert'}).then(function (success) {
    return callback(success, 200);
  }, function (error) {
    return callback(new Error(error), 400);
  });
}

var deleteUser = function(id, callback) {
  db.User.query({where: {'id' : id}}).destroy().then( function (success) {
    return callback(success, 200);
  }, function (error) {
    return callback(new Error(error), 400);
  });
};
// Lib methods
module.exports.users = {};
module.exports.users.fetchAllUsers = fetchAllUsers;
module.exports.users.fetchUser = fetchUser;

module.exports = router;
