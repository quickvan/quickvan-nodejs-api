/**
 * Quickvan API - Travel Schema
 * 28/Feb, 2017
 *
 * @file quickvan-nodejs-api/schemas/TravelSchema.js
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict';

var mongoose = require('../db/mongoose');

var TravelSchema = mongoose.Schema({
  _company  : { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Company' },
  _passenger: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Passenger' },
  _vehicle  : { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Vehicle' },
  company: {
    name  : { type: String, trim: true, required: true },
    email : { type: String, trim: true, required: true },
    phone : { type: String, trim: true, required: true }
  },
  passenger: {
    name  : { type: String, trim: true, required: true },
    email : { type: String, trim: true, required: true },
    phone : { type: String, trim: true, required: true }
  },
  vehicle: {
    type    : { type: String, trim: true, required: true },
    images  : { type: [String], required: true },
    details : { type: [String], required: true },
    capacity: { type: Number, required: true }
  },
  origin: {
    zipcode: { type: String, trim: true, required: true },
    city   : { type: String, trim: true, required: true },
    address: { type: String, trim: true, required: true },
    loc    : { type: [Number], index: '2d' }
  },
  destination: {
    zipcode: { type: String, trim: true, required: true },
    city   : { type: String, trim: true, required: true },
    address: { type: String, trim: true, required: true },
    loc    : { type: [Number], index: '2d' }
  },
  departureTime: { type: Date, require: true },
  numPassengers: { type: Number, required: true },
  createdAt    : { type: Date, default: Date.now }
});

module.exports = TravelSchema;
