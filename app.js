const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const book = require('./api/book')
const author = require('./api/author')
const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1/books', book)
app.use('/api/v1/authors', author)
// app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message
    //error: req.app.get('env') === 'production' ? {} : err.stack
    //could also be
    //stack: process.env.NODE_ENV == 'development' ? err.stack : {}
  });
});



module.exports = app;
