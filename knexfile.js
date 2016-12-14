// Update with your config settings.

module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   }
  // },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     user:     process.env.DATABASE_USER,
  //     password: process.env.DATABASE_PASSWORD,
  //     database: process.env.DATABASE_DATABASE,
  //     port:     process.env.DATABASE_PORT,
  //     host:     process.env.DATABASE_HOST,
  //     ssl:      true
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //     directory: './migrations'
  //   }
  // },

  production: {
      client: 'postgresql',
      connection: {
        user:     'bezqhknhyjmtmb',
        password: 'm53kWnINUJW5Cw4CifGm1BdEbc',
        database: 'd32kofln8m2vqg',
        port:     '5432',
        host:     'ec2-54-235-111-59.compute-1.amazonaws.com',
        ssl:      true
    },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './migrations'
      }
  }

};
