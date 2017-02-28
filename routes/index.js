/**
 * @file quickvan-nodejs-api/routes/index.js
 *
 * Quickvan API - Config all files routes
 * 28/Feb, 2017
 *
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict';

var express = require('express'),
    config  = require('config'),
    router = express.Router();

router.get('/', function (request, response) {
  // show documentation
  response.status(200);
  response.json({ 'QuickvanApi': 'working' });
});

// companies
router.use('/companies', require('./companies'));

// vehicles
//router.use('/vehicles', require('./vehicles'));

// users
//router.use('/users', require('./users'));

module.exports = router;
