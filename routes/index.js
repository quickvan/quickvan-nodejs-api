/**
 * Quickvan API - Config all files routes
 * 28/Feb, 2017
 *
 * @file quickvan-nodejs-api/routes/index.js
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict';

var express = require('express'),
  config    = require('config'),
  router    = express.Router();

router.get('/', function (request, response) {
  // @todo show documentation
  response.status(200);
  response.json({ 'QuickvanApi': 'working' });
});

// companies
router.use('/api/companies', require('./api/companies'));

// vehicles
router.use('/api/vehicles', require('./api/vehicles'));

// passengers
router.use('/api/passengers', require('./api/passengers'));

module.exports = router;
