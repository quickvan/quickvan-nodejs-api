/**
 * Quickvan API - Companies routes
 * 28/Feb, 2017
 *
 * @file quickvan-nodejs-api/repositories/CompanyRepository.js
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict'

function CompanyRepository(model) {
  this.model = model;
}

CompanyRepository.prototype.create = function (data, callback) {
  var model = new this.model(data);
  model.save(function (err, result) {
    callback(err, result);
  });
};

CompanyRepository.prototype.find = function (query, callback) {
  this.model.find(query).exec(callback);
};

CompanyRepository.prototype.findOne = function (_id, callback) {
  var query = { _id: _id };
  this.model.findOne(query).exec(callback);
};

CompanyRepository.prototype.update = function (_id, data, callback) {
  var query = { _id: _id };
  this.model.update(query, data).exec(function (err, result) {
    callback(err, result);
  });
};

CompanyRepository.prototype.remove = function (_id, callback) {
  var query = { _id: _id };
  this.model.remove(query).exec(function (err, result) {
    callback(err, result);
  });
};

module.exports = function (mongoose) {
  var schema = require('../schemas/CompanySchema');
  var Company = mongoose.model('Company', schema);
  return new CompanyRepository(Company);
};
