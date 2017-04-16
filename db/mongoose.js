/**
 * Quickvan API - Mongoose connection
 * 28/Feb, 2017
 *
 * @file quickvan-nodejs-api/db/mongoose.js
 * @author Lucas de Oliveira <contato@deoliveiralucas.net>
 */
'use strict';

const mongoose = require('mongoose'),
  debug        = require('debug')('quickvan_api:db'),
  config       = require('config');

function _connection() {
  const username = config.get('mongo.username'),
    password     = config.get('mongo.password'),
    server       = config.get('mongo.server'),
    port         = config.get('mongo.port'),
    database     = config.get('mongo.database'),
    auth         = username ? username + ':' + password + '@' : '';

  return 'mongodb://' + auth + server + ':' + port + '/' + database;
}

mongoose.connect(_connection());

const db = mongoose.connection;
db.on('error', function (err) {
  debug(err);
});
db.once('open', function (callback) {
  debug('connected to mongodb');
});

module.exports = mongoose;
