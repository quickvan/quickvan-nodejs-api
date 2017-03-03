/**
 * Quickvan API - Passenger routes
 * 28/Feb, 2017
 *
 * @file quickvan-nodejs-api/routes/api/passengers.js
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict';

var express = require('express'),
  config    = require('config'),
  router    = express.Router();

var mongoose            = require('../../db/mongoose');
var PassengerRepository = require('../../repositories/PassengerRepository')(mongoose);
var PassengerController = require('../../controllers/PassengerController')(PassengerRepository);

router.get('/', PassengerController.getAll.bind(PassengerController));
router.get('/:_id', PassengerController.getById.bind(PassengerController));
router.post('/', PassengerController.create.bind(PassengerController));
router.put('/:_id', PassengerController.update.bind(PassengerController));
router.delete('/:_id', PassengerController.remove.bind(PassengerController));

module.exports = router;
