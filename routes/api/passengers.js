/**
 * Quickvan API - Passenger routes
 * 28/Feb, 2017
 *
 * @file quickvan-nodejs-api/routes/api/passengers.js
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict';

const express = require('express'),
  config      = require('config'),
  router      = express.Router();

const mongoose            = require('../../db/mongoose');
const PassengerRepository = require('../../repositories/PassengerRepository')(mongoose);
const PassengerController = require('../../controllers/PassengerController')(PassengerRepository);

router.get('/', PassengerController.getAll.bind(PassengerController));
router.get('/:_id', PassengerController.getById.bind(PassengerController));
router.post('/', PassengerController.create.bind(PassengerController));
router.put('/:_id', PassengerController.update.bind(PassengerController));
router.delete('/:_id', PassengerController.remove.bind(PassengerController));

module.exports = router;
