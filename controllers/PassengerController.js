/**
 * Quickvan API - Vehicle controller
 * 28/Feb, 2017
 *
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 * @file quickvan-nodejs-api/controllers/PassengersController.js
 */
'use strict';

const debug = require('debug')('quickvan:controller:passenger');
const Promise = require('bluebird');

const handleNotFound = function (data) {
  if (! data) {
    const err = new Error('Not Found');
    err.status = 404;
    throw err;
  }
  return data;
};

function PassengersController(PassengersRepository) {
  this.model = Promise.promisifyAll(PassengersRepository);
}

PassengersController.prototype.getAll = function (req, res, next) {
  this.model.findAsync({})
    .then(handleSuccess)
    .catch(next);

  function handleSuccess(data) {
    res.json(data);
  }
};

PassengersController.prototype.getById = function (req, res, next) {
  const _id = req.params._id;

  this.model.findOneAsync(_id)
    .then(handleNotFound)
    .then(handleSuccess)
    .catch(next);

  function handleSuccess(data) {
    res.json(data);
  }
};

PassengersController.prototype.create = function (req, res, next) {
  const body = req.body;

  this.model.createAsync(body)
    .then(handleSuccess)
    .catch(next);

  function handleSuccess(data) {
    res.status(201).json(data);
  }
};

PassengersController.prototype.update = function (req, res, next) {
  const _id = req.params._id,
    body  = req.body;

  this.model.updateAsync(_id, body)
    .then(handleSuccess)
    .catch(next);

  function handleSuccess(data) {
    res.json(data);
  }
};

PassengersController.prototype.remove = function (req, res, next) {
  const _id = req.params._id;

  this.model.removeAsync(_id)
    .then(handleSuccess)
    .catch(next);

  function handleSuccess(err, data) {
    res.json(data);
  }
};

module.exports = function (PassengersRepository) {
  return new PassengersController(PassengersRepository);
};
