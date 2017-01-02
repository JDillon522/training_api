var router = require('express').Router();
var db = require('../database');


/* GET heros listing. */
router.get('/', function(req, res, next) {
  fetchAllHeroes(function(result, status) {
    return res.status(status).send(result).end();
  });
});

router.get('/:hero_id', function(req, res, next) {
  fetchHero(req.params.hero_id, function(result, status) {
    return res.send(result);
  });
});

router.post('/', function(req, res, next) {
  var hero = {
    name: req.body.name,
    age: parseInt(req.body.age, 10),
    power_id: parseInt(req.body.power_id, 10)
  };
  addHero(hero, function(result, status) {
    return res.send(result);
  });
});

router.delete('/:hero_id', function(req, res, next) {
  deleteHero(req.params.hero_id, function(result, status) {
    return res.send(result).status(200).end();
  });
});

var fetchAllHeroes = function(callback) {
  db.query('SELECT * FROM heroes', function(error, result) {
    if (error) {
      console.error(error);
      return callback(new Error(error), 400);
    }

    return callback(result.rows, 200);
  });
};

var fetchHero = function(id, callback) {
  db.query('SELECT * FROM heroes WHERE id = ' + id, function(error, result) {
    if (error) {
      console.error(error);
      return callback(new Error(error), 400);
    }

    return callback(result.rows, 200);
  });
};

var addHero = function(hero, callback) {
  var query = 'INSERT INTO heroes (name, age, power_id) VALUES (\'' +
    hero.name + '\', \'' +
    hero.age + '\', \'' +
    hero.power_id + '\')';

  db.query(query, function(error, result) {
    if (error) {
      console.error(error);
      return callback(new Error(error), 400);
    }

    return callback(result, 200);
  });
}

var deleteHero = function(id, callback) {
  var query = 'DELETE FROM heroes WHERE id = ' + id;

  db.query(query, function(error, result) {
    if (error) {
      console.error(error);
      return callback(new Error(error), 400);
    }

    return callback(result, 200);
  });
};

// Lib methods
module.exports.heros = {};
module.exports.heros.fetchAllHeroes = fetchAllHeroes;
module.exports.heros.fetchHero = fetchHero;

module.exports = router;
