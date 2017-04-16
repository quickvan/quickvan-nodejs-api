/**
 * Quickvan API - Travel routes
 * 28/Feb, 2017
 *
 * @file quickvan-nodejs-api/routes/api/travels.js
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict';

const express = require('express'),
  config      = require('config'),
  router      = express.Router();

const mongoose            = require('../../db/mongoose');
const TravelRepository = require('../../repositories/TravelRepository')(mongoose);
const TravelController = require('../../controllers/TravelController')(TravelRepository);

router.get('/', TravelController.getAll.bind(TravelController));
router.get('/:_id', TravelController.getById.bind(TravelController));
router.post('/', TravelController.create.bind(TravelController));
router.put('/:_id', TravelController.update.bind(TravelController));
router.delete('/:_id', TravelController.remove.bind(TravelController));

module.exports = router;
