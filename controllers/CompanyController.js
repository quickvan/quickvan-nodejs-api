/**
 * Quickvan API - Company controller
 * 28/Feb, 2017
 *
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 * @file quickvan-nodejs-api/controllers/CompanyController.js
 */
'use strict';

const debug = require('debug')('quickvan:controller:company');
const Promise = require('bluebird');

const handleNotFound = function (data) {
  if (! data) {
    const err = new Error('Not Found');
    err.status = 404;
    throw err;
  }
  return data;
};

function CompanyController(CompanyRepository) {
  this.model = Promise.promisifyAll(CompanyRepository);
}

CompanyController.prototype.getAll = function (req, res, next) {
  this.model.findAsync({})
    .then(handleSuccess)
    .catch(next);

  function handleSuccess(data) {
    res.json(data);
  }
};

CompanyController.prototype.getById = function (req, res, next) {
  const _id = req.params._id;

  this.model.findOneAsync(_id)
    .then(handleNotFound)
    .then(handleSuccess)
    .catch(next);

  function handleSuccess(data) {
    res.json(data);
  }
};

CompanyController.prototype.create = function (req, res, next) {
  const body = req.body;

  this.model.createAsync(body)
    .then(handleSuccess)
    .catch(next);

  function handleSuccess(data) {
    res.status(201).json(data);
  }
};

CompanyController.prototype.update = function (req, res, next) {
  const _id = req.params._id,
    body  = req.body;

  this.model.updateAsync(_id, body)
    .then(handleSuccess)
    .catch(next);

  function handleSuccess(data) {
    res.json(data);
  }
};

CompanyController.prototype.remove = function (req, res, next) {
  const _id = req.params._id;

  this.model.removeAsync(_id)
    .then(handleSuccess)
    .catch(next);

  function handleSuccess(err, data) {
    res.json(data);
  }
};

module.exports = function (CompanyRepository) {
  return new CompanyController(CompanyRepository);
};
