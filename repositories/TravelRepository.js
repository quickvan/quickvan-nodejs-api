/**
 * Quickvan API - Travel repository
 * 28/Feb, 2017
 *
 * @file quickvan-nodejs-api/repositories/TravelRepository.js
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict';

function TravelRepository(model) {
  this.model = model;
}

TravelRepository.prototype.create = function (data, callback) {
  const model = new this.model(data);
  model.save(function (err, result) {
    callback(err, result);
  });
};

TravelRepository.prototype.find = function (query, callback) {
  this.model.find(query).exec(callback);
};

TravelRepository.prototype.findOne = function (_id, callback) {
  const query = { _id: _id };
  this.model.findOne(query).exec(callback);
};

TravelRepository.prototype.update = function (_id, data, callback) {
  const query = { _id: _id };
  this.model.update(query, data).exec(function (err, result) {
    callback(err, result);
  });
};

TravelRepository.prototype.remove = function (_id, callback) {
  const query = { _id: _id };
  this.model.remove(query).exec(function (err, result) {
    callback(err, result);
  });
};

module.exports = function (mongoose) {
  const schema = require('../schemas/TravelSchema');
  const Travel = mongoose.model('Travel', schema);
  return new TravelRepository(Travel);
};
