const express = require('express');
const knex = require('../db/knex')
const router = express.Router();
const queries = require('../db/queries');

function validBook(book) {
  console.log(book.title);
  const hasTitle = typeof book.title == 'string' && book.title.trim() != '';
  const hasGenre = typeof book.genre == 'string' && book.genre.trim() != '';
  const hasCover = typeof book.cover_url == 'string' && book.cover_url.trim() != '';
  const hasDescription = typeof book.description == 'string' && book.description.trim() != '';
  console.log(hasTitle + ' ' + hasGenre + ' ' + hasCover + ' ' + hasDescription);
  return hasCover && hasTitle && hasGenre && hasDescription;
}

router.get('/', (req, res, next) => {
  queries.getAllBooks().then(books =>{
    res.json(books)
//    const authorsForBook= {};
//    const authorArray = [];
//    books.forEach(booksTwo => {
//      if (!authorsForBook[booksTwo.title]) {
//        const booksWithAllAuthors = {
//          title: booksTwo.title,
//          genre: booksTwo.break_type,
//          description: booksTwo.description,
//          authors: []
//        };
//        authorArray.push(booksWithAuthors);
//        authorsForBook[bookTwo.title] = booksWithAuthors;
//      }
//
//      authorsForBook[booksTwo.title].authors.push(booksTwo.authors)
//    })
//    res.json(authorArray[0])
  })
})

router.post('/new', (req, res, next) => {
  console.log(req.body);
  if(validBook(req.body)){
    queries.addBook(req.body).then(book=> {
      console.log('posting in the router');
      console.log(req.body);
      res.json(book)
    }).catch(err =>{
      next(err)
    })
  }
  else{

    next(new Error('invalid book'))
  }

})

module.exports = router
