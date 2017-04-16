/**
 * Quickvan API - Vehicles routes
 * 28/Feb, 2017
 *
 * @file quickvan-nodejs-api/routes/api/vehicles.js
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict';

const express = require('express'),
  config      = require('config'),
  router      = express.Router();

const mongoose          = require('../../db/mongoose');
const VehicleRepository = require('../../repositories/VehicleRepository')(mongoose);
const VehicleController = require('../../controllers/VehicleController')(VehicleRepository);

router.get('/', VehicleController.getAll.bind(VehicleController));
router.get('/:_id', VehicleController.getById.bind(VehicleController));
router.post('/', VehicleController.create.bind(VehicleController));
router.put('/:_id', VehicleController.update.bind(VehicleController));
router.delete('/:_id', VehicleController.remove.bind(VehicleController));

module.exports = router;
