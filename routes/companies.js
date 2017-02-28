/**
 * @file quickvan-nodejs-api/routes/companies.js
 *
 * Quickvan API - Companies routes
 * 28/Feb, 2017
 *
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict';

var express = require('express'),
  config    = require('config'),
  router    = express.Router();

var mongoose          = require('../db/mongoose');
var CompanyRepository = require('../repositories/CompanyRepository')(mongoose);
var CompanyController = require('../controllers/CompanyController')(CompanyRepository);

router.get('/', CompanyController.getAll.bind(CompanyController));
router.get('/:_id', CompanyController.getById.bind(CompanyController));
router.post('/', CompanyController.create.bind(CompanyController));
router.put('/:_id', CompanyController.update.bind(CompanyController));
router.delete('/:_id', CompanyController.remove.bind(CompanyController));

module.exports = router;
