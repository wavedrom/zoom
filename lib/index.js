'use strict';

const pkg = require('../package.json');
const genKeyHandler = require('./gen-key-handler.js');
const view = require('./view.js');
const tileLayer = require('./tile-layer.js');

exports.version = pkg.version;
exports.genKeyHandler = genKeyHandler;
exports.view = view;
exports.tileLayer = tileLayer;
