'use strict';

// const ResizeObserver = require('resize-observer-polyfill');

const lib = require('../lib/index.js');

// const setupResize = (el, cnvs) => {
//
//   const observer = new ResizeObserver((entries) => {
//     entries.map(e => {
//
//       console.log('resize', e);
//
//     });
//   });
//
//   observer.observe(el);
// };
//
// setupResize(eZoom, cnvs);

const container = document.getElementById('zoom-container');
const map = lib.view(container, {});
const layer1 = lib.tileLayer('layer1').addTo(map);
console.log(layer1);

/* eslint-env browser */
