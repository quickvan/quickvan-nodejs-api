/**
 * @file quickvan-nodejs-api/repositories/CompanyRepository.js
 *
 * Quickvan API - Companies routes
 * 28/Feb, 2017
 *
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

// @todo add to schema directory
module.exports = function (mongoose) {
  var Company = mongoose.model('Company', {
    responsible: String,
    name:        String,
    cnpj:        String,
    phone:       String,
    image:       String,
    email:       String,
    password:    String,
    address: {
      zipcode:      String,
      address:      String,
      complement:   String,
      number:       Number,
      neighborhood: String,
      city:         String,
      state:        String
    },
    terms_accepted: Boolean
  });

  return new CompanyRepository(Company);
};
