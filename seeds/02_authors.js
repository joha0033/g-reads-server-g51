const authors = require('../fixtures/authors')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE author RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('author').insert(authors);
    });
};
