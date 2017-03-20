var Pool = require('pg-pool');

var config = {
  user: process.env.DB_USER, //env var: PGUSER
  database: process.env.DB_NAME, //env var: PGDATABASE
  password: process.env.DB_PASSWORD, //env var: PGPASSWORD
  host: process.env.DB_HOST, // Server hosting the postgres database
  port: process.env.DB_PORT, //env var: PGPORT
  // max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  ssl: true
}
var pool = new Pool(config);

pool.on('error', function(error, client) {
  // handle this in the same way you would treat process.on('uncaughtException')
  // it is supplied the error as well as the idle client which received the error
  console.error('Pool Error', error);
});


pool.on('connect', client => {
  console.log('Pool Connect');
})

pool.on('acquire', function (client) {
  console.log('Pool Aquire');
})


// module.exports.client = pool;
module.exports.query = (text, values) => {
  return pool.query(text, values);
};
