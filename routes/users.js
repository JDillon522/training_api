var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET users listing. */
router.get('/', function(req, res, next) {

  db.User.fetchAll().then( function (success) {
    return res.send(success);
  }, function (error) {
    return res.send(new Error(error));
  });

});

module.exports = router;
