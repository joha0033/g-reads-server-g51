const express = require('express');
const knex = require('../db/knex')
const router = express.Router();
const queries = require('../db/queries');


router.get('/', (req, res) => {
  queries.getAllBooks().then(books =>{
    res.json(books);
  })
})

router.post('/new', (req, res, next) => {
  queries.addBook(req.body).then(book=> {
    console.log('posting in the router');
    console.log(req.body);
    res.json(book)
  })
})

module.exports = router
