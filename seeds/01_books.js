const books = require('../fixtures/books')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE book RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('book').insert(books);
    });
};
