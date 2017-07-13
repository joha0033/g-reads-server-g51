const books_authors = require('../fixtures/books_authors')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE books_authors RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('books_authors').insert(books_authors);
    });
};
