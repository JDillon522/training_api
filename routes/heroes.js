var router = require('express').Router();
var lib = require('./lib');


/* GET heros listing. */
router.get('/', function(req, res, next) {
  lib.selectAllData('heroes', function(result, status) {
    return res.status(status).send(result).end();
  });
});

router.get('/:hero_id', function(req, res, next) {
  lib.selectData('heroes', req.params.hero_id, function(result, status) {
    return res.status(status).send(result).end();
  });
});

router.post('/', function(req, res, next) {
  var hero = {
    name: req.body.name,
    age: parseInt(req.body.age, 10),
    power_id: parseInt(req.body.power_id, 10)
  };

  lib.addData('heroes', hero, function(result, status) {
    return res.status(status).send(result).end();
  });
});

router.delete('/:hero_id', function(req, res, next) {
  lib.deleteData('heroes', req.params.hero_id, function(result, status) {
    return res.status(status).send(result).end();
  });
});

module.exports = router;
