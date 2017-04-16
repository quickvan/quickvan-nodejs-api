/**
 * Quickvan API - Vehicle Schema
 * 28/Feb, 2017
 *
 * @file quickvan-nodejs-api/schemas/VehicleSchema.js
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict';

const mongoose = require('../db/mongoose');

const VehicleSchema = mongoose.Schema({
  _company: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Company' },
  company: {
    name : { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    phone: { type: String, trim: true, required: true }
  },
  type       : { type: String, required: true },
  capacity   : { type: Number, required: true },
  images     : { type: [String] },
  details    : { type: [String] },
  description: { type: String },
  createdAt  : { type: Date, default: Date.now },
});

module.exports = VehicleSchema;
