/**
 * Quickvan API - Vehicle controller
 * 28/Feb, 2017
 *
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 * @file quickvan-nodejs-api/controllers/VehicleController.js
 */
'use strict';

var debug = require('debug')('quickvan:controller:vehicle');
var Promise = require('bluebird');

var handleNotFound = function (data) {
  if (! data) {
    var err = new Error('Not Found');
    err.status = 404;
    throw err;
  }
  return data;
};

function VehicleController(VehicleRepository) {
  this.model = Promise.promisifyAll(VehicleRepository);
}

VehicleController.prototype.getAll = function (req, res, next) {
  this.model.findAsync({})
    .then(handleSuccess)
    .catch(next);

  function handleSuccess(data) {
    res.json(data);
  }
};

VehicleController.prototype.getById = function (req, res, next) {
  var _id = req.params._id;

  this.model.findOneAsync(_id)
    .then(handleNotFound)
    .then(handleSuccess)
    .catch(next);

  function handleSuccess(data) {
    res.json(data);
  }
};

VehicleController.prototype.create = function (req, res, next) {
  var body = req.body;

  this.model.createAsync(body)
    .then(handleSuccess)
    .catch(next);

  function handleSuccess(data) {
    res.status(201).json(data);
  }
};

VehicleController.prototype.update = function (req, res, next) {
  var _id = req.params._id,
    body  = req.body;

  this.model.updateAsync(_id, body)
    .then(handleSuccess)
    .catch(next);

  function handleSuccess(data) {
    res.json(data);
  }
};

VehicleController.prototype.remove = function (req, res, next) {
  var _id = req.params._id;

  this.model.removeAsync(_id)
    .then(handleSuccess)
    .catch(next);

  function handleSuccess(err, data) {
    res.json(data);
  }
};

module.exports = function (VehicleRepository) {
  return new VehicleController(VehicleRepository);
};
