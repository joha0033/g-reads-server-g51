const express = require('express');
const knex = require('../db/knex')
const router = express.Router();
const queries = require('../db/queries');

//redo for authors once books work
// function validBook(book) {
//   console.log(book.title);
//   const hasTitle = typeof book.title == 'string' && book.title.trim() != '';
//   const hasGenre = typeof book.genre == 'string' && book.genre.trim() != '';
//   const hasCover = typeof book.cover_url == 'string' && book.cover_url.trim() != '';
//   const hasDescription = typeof book.hasDescription == 'string' && book.hasDescription.trim() != '';
//   console.log(hasTitle + ' ' + hasGenre + ' ' + hasCover + ' ' + hasDescription);
//   return hasCover && hasName && hasGenre && hasDescription;
// }

router.get('/', (req, res) => {
  queries.getAllAuthors().then(authors =>{
    res.json(authors);
  })
})

router.post('/new', (req, res, next) => {
  queries.addAuthor(req.body).then(author=> {
    console.log('posting in the router');
    console.log(req.body);
    res.json(author)
  })
})




module.exports = router
