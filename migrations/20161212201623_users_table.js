
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table){
      table.increments('id').primary();
      table.string('firstName');
      table.string('lastName');
      table.string('email').unique();
      table.string('phone');
    })
};

exports.down = function(knex, Promise) {

};
