/**
 * Quickvan API - Companies routes
 * 28/Feb, 2017
 *
 * @file quickvan-nodejs-api/repositories/VehicleRepository.js
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict'

function VehicleRepository(model) {
  this.model = model;
}

VehicleRepository.prototype.create = function (data, callback) {
  var model = new this.model(data);
  model.save(function (err, result) {
    callback(err, result);
  });
};

VehicleRepository.prototype.find = function (query, callback) {
  this.model.find(query).exec(callback);
};

VehicleRepository.prototype.findOne = function (_id, callback) {
  var query = { _id: _id };
  this.model.findOne(query).exec(callback);
};

VehicleRepository.prototype.update = function (_id, data, callback) {
  var query = { _id: _id };
  this.model.update(query, data).exec(function (err, result) {
    callback(err, result);
  });
};

VehicleRepository.prototype.remove = function (_id, callback) {
  var query = { _id: _id };
  this.model.remove(query).exec(function (err, result) {
    callback(err, result);
  });
};

module.exports = function (mongoose) {
  var schema = require('../schemas/VehicleSchema');
  var Vehicle = mongoose.model('Vehicle', schema);
  return new VehicleRepository(Vehicle);
};
