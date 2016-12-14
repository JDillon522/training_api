var config      = require('./knexfile.js');
var env         = 'production';
var knex        = require('knex')(config[env]);
console.log('THIS IS RUNNING')
module.exports = knex;

knex.migrate.latest([config]);
