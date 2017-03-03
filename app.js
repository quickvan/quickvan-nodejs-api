/**
 * Quickvan API - Initialization file
 * 28/Feb, 2017
 *
 * @file quickvan-nodejs-api/app.js
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict';

var express      = require('express'),
  methodOverride = require('method-override'),
  bodyParser     = require('body-parser'),
  app            = express();

// server config
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(function (request, response, next) {
  if (request.url === '/favicon.ico') {
    response.writeHead(200, { 'Content-Type': 'image/x-icon' });
    response.end('');
  } else {
    next();
  }
});

// router
app.use('/', require('./routes'));

// error handling
app.use(function (request, response, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use(function (err, request, response, next) {
  console.log(err.stack);
  response.status(err.status || 500).json({ err: err.message });
});

// server listener
module.exports = app;
