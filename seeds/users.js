
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
            id: 1,
            firstName: 'Joseph',
            lastName: 'Dillon',
            email: 'joseph.dillon.522@gmail.com',
            phone: '123-123-1234'
        }),
        knex('users').insert({
            id: 1,
            firstName: 'Tyler',
            lastName: 'Saklad',
            email: 'tyler@somewhere.com',
            phone: '123-123-1234'
        })
      ]);
    });
};
