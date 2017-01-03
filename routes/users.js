var router = require('express').Router();
var lib = require('./lib');

/* GET users listing. */
router.get('/', function(req, res, next) {
  lib.selectAllData('users', function(result, status) {
    return res.status(status).send(result).end();
  });
});

router.get('/:user_id', function(req, res, next) {
  lib.selectData('users', req.params.user_id, function(result, status) {
    return res.status(status).send(result).end();
  });
});

router.post('/', function(req, res, next) {
  var keys = Object.keys(req.body);
  var user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  };

  lib.addData('users', user, function(result, status) {
    return res.status(status).send(result).end();
  });
});

router.put('/:user_id', function(req, res, next) {
  var keys = Object.keys(req.body);
  var user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  };

  lib.updateData('users', req.params.user_id, user, function(result, status) {
    return res.status(status).send(result).end();
  });
});

router.delete('/:user_id', function(req, res, next) {
  lib.deleteData('users', req.params.user_id, function(result, status) {
    return res.status(status).send(result).end();
  });
});

module.exports = router;
