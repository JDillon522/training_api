var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: {
    user: process.env.DB_USER, //env var: PGUSER
    database: process.env.DB_NAME, //env var: PGDATABASE
    password: process.env.DB_PASSWORD, //env var: PGPASSWORD
    host: process.env.DB_HOST, // Server hosting the postgres database
    port: process.env.DB_PORT, //env var: PGPORT
    // max: 10, // max number of clients in the pool
    // idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    ssl: true
  }
});
var bookshelf = require('bookshelf')(knex);
var User = bookshelf.Model.extend({
  tableName: 'users',
  // hasTimestamps: true,
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  // pg.defaults.ssl = true;
  // pg.connect(process.env.DATABASE_URL, function(err, client) {
  //   if (err) throw err;
  //   console.log('Connected to postgres! Getting schemas...');
  //
  //   client
  //     .query('SELECT * FROM users;')
  //     .on('row', function(row) {
  //       console.log(JSON.stringify(row));
  //       res.send(row);
  //     });
  // });
  User.fetchAll().then( function (success) {
    return res.send(success);
  }, function (error) {
    return res.send(new Error(error));
  });

});

module.exports = router;
