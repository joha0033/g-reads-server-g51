const knex = require('./knex')
module.exports = {

  getAllBooks(){
    return knex('book')
  },
  addBook(book){
    let newBook = {
      title: book.title,
      genre: book.genre,
      description: book.description,
      cover_url: book.cover_url
    }
    return knex('book').insert(newBook).returning('*')
  },
  getAllAuthors(){
    return knex('author')
  },
  addAuthor(author){
    return knex('author').insert(author).returning('*')
  }
}
