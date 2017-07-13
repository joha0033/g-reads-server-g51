const express = require('express');
const knex = require('../db/knex')
const router = express.Router();
const queries = require('../db/queries');

// function validBook(book) {
//   const hasTitle = typeof book.title == 'string' && book.title.trim() != '';
//   const hasGenre = typeof book.genre == 'string' && book.genre.trim() != '';
//   const hasCover = typeof book.cover_url == 'string' && book.cover_url.trim() != '';
//   const hasDescription = typeof book.hasDescription == 'string' && book.hasDescription.trim() != '';
//   return hasCover && hasName && hasGenre && hasDescription;
// }

router.get('/', (req, res) => {
  queries.getAllBooks().then(books =>{
    res.json(books);
  })
})

router.post('/new', (req, res, next) => {
  console.log('made it?');
      queries.addBook(req.body).then(result => {
        //console.log(req.body);
        console.log('hello from the router!');
        console.log(result);
        res.json(result);
      });
});

module.exports = router
