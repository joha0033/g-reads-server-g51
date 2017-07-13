const knex = require('./knex')
module.exports = {

  getAllBooks(){
    return knex('book')
  },

  addBook(book) {
  return knex('book').insert(book).returning('*');
},
  addBook(book){
    return knex('book').insert(book).returning('*')
  }
}
