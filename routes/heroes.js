var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fetchAllHeroes(function(result, status) {
    return res.send(result);
  });
});

router.get('/:hero_id', function(req, res, next) {
  fetchHero(req.params.hero_id, function(result, status) {
    return res.send(result);
  });
});


var fetchAllHeroes = function(callback) {
  db.Heroes.fetchAll().then( function (success) {
    return callback(success, 200);
  }, function (error) {
    return callback(new Error(error), 400);
  });
};

var fetchHero = function(id, callback) {
  db.Heroes.query({where: {'id' : id}}).fetch().then( function (success) {
    return callback(success, 200);
  }, function (error) {
    return callback(new Error(error), 400);
  });
}

// Lib methods
module.exports.heroes = {};
module.exports.heroes.fetchAllHeroes = fetchAllHeroes;
module.exports.heroes.fetchHero = fetchHero;

module.exports = router;
