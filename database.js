var Pool = require('pg-pool');

var config = {
  user: process.env.DB_USER, //env var: PGUSER
  database: process.env.DB_NAME, //env var: PGDATABASE
  password: process.env.DB_PASSWORD, //env var: PGPASSWORD
  host: process.env.DB_HOST, // Server hosting the postgres database
  port: process.env.DB_PORT, //env var: PGPORT
  // max: 10, // max number of clients in the pool
  // idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  ssl: true
}
var pool = new Pool(config).connect();

module.exports.client = pool;
//
// var knex = require('knex')({
//   client: 'pg',
//   connection: {
//     user: process.env.DB_USER, //env var: PGUSER
//     database: process.env.DB_NAME, //env var: PGDATABASE
//     password: process.env.DB_PASSWORD, //env var: PGPASSWORD
//     host: process.env.DB_HOST, // Server hosting the postgres database
//     port: process.env.DB_PORT, //env var: PGPORT
//     // max: 10, // max number of clients in the pool
//     // idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
//     ssl: true
//   }
// });
// var bookshelf = require('bookshelf')(knex);
// bookshelf.plugin('registry');
//
//
// var User = bookshelf.Model.extend({
//   tableName: 'users'
// });
//
// var Users = bookshelf.Collection.extend({
//   model: User
// });
//
// var Power = bookshelf.Model.extend({
//   tableName: 'power'
// });
//
// var Heroes = bookshelf.Model.extend({
//   tableName: 'heroes',
//   power: function() {
//     return this.hasOne(Power);
//   }
// });
//
// module.exports.User = User.forge();
// module.exports.Users = Users.forge();
// module.exports.Heroes = Heroes.forge();
