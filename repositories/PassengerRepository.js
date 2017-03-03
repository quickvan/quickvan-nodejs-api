/**
 * Quickvan API - Passengers routes
 * 28/Feb, 2017
 *
 * @file quickvan-nodejs-api/repositories/PassengerRepository.js
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict'

function PassengerRepository(model) {
  this.model = model;
}

PassengerRepository.prototype.create = function (data, callback) {
  var model = new this.model(data);
  model.save(function (err, result) {
    callback(err, result);
  });
};

PassengerRepository.prototype.find = function (query, callback) {
  this.model.find(query).exec(callback);
};

PassengerRepository.prototype.findOne = function (_id, callback) {
  var query = { _id: _id };
  this.model.findOne(query).exec(callback);
};

PassengerRepository.prototype.update = function (_id, data, callback) {
  var query = { _id: _id };
  this.model.update(query, data).exec(function (err, result) {
    callback(err, result);
  });
};

PassengerRepository.prototype.remove = function (_id, callback) {
  var query = { _id: _id };
  this.model.remove(query).exec(function (err, result) {
    callback(err, result);
  });
};

module.exports = function (mongoose) {
  var schema = require('../schemas/PassengerSchema');
  var Passenger = mongoose.model('Passenger', schema);
  return new PassengerRepository(Passenger);
};
