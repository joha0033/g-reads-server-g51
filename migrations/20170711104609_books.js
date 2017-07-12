exports.up = function(knex, Promise) {
return knex.schema
  .createTable('book', function(table){
    table.increments('id').primary();
    table.text('title').notNullable();
    table.text('genre').notNullable();
    table.text('description').notNullable();
    table.text('cover_url').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('book');
};
