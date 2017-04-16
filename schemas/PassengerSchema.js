/**
 * Quickvan API - Passenger Schema
 * 28/Feb, 2017
 *
 * @file quickvan-nodejs-api/schemas/PassengerSchema.js
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict';

const mongoose = require('../db/mongoose');

const PassengerSchema = mongoose.Schema({
  name  : { type: String, trim: true, required: true },
  phone : { type: String, trim: true, required: true },
  imagem: { type: String, trim: true, required: true },
  access: {
    email   : { type: String, trim: true, required: true },
    password: { type: String, required: true }
  },
  address: {
    zipcode     : { type: String, trim: true, required: true },
    street      : { type: String, trim: true, required: true },
    complement  : { type: String, trim: true},
    number      : { type: Number, required: true },
    neighborhood: { type: String, trim: true, required: true },
    city        : { type: String, trim: true, required: true },
    state       : { type: String, trim: true, required: true }
  },
  termsAccepted: { type: Boolean, required: true },
  createdAt    : { type: Date, default: Date.now },
});

module.exports = PassengerSchema;
