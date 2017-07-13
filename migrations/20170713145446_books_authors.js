exports.up = function(knex, Promise) {
return knex.schema
  .createTable('books_authors', function(table){
    table.increments('id').primary();
    table.integer('book_id').unsigned();
    table.foreign('book_id').references('book.id');
    table.integer('authors_id').unsigned();
    table.foreign('authors_id').references('author.id');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('books_authors');
};
