/**
 * Quickvan API - Companies routes
 * 28/Feb, 2017
 *
 * @file quickvan-nodejs-api/routes/api/companies.js
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict';

const express = require('express'),
  config      = require('config'),
  router      = express.Router();

const mongoose          = require('../../db/mongoose');
const CompanyRepository = require('../../repositories/CompanyRepository')(mongoose);
const CompanyController = require('../../controllers/CompanyController')(CompanyRepository);

router.get('/', CompanyController.getAll.bind(CompanyController));
router.get('/:_id', CompanyController.getById.bind(CompanyController));
router.post('/', CompanyController.create.bind(CompanyController));
router.put('/:_id', CompanyController.update.bind(CompanyController));
router.delete('/:_id', CompanyController.remove.bind(CompanyController));

module.exports = router;
