'use strict';

// const lib = require('../lib/');

// console.log(lib);

const eContainer = document.getElementById('container');
const eZoom = document.getElementById('zoom');

Object.entries({
  height: '100%',
  overflow: 'hidden',
  // margin: 0,
  // display: 'flex',
  background: '#000'
}).map(([key, val]) => eContainer.style[key] = val);

Object.entries({
  // overflow: 'hidden',
}).map(([key, val]) => eZoom.style[key] = val);

const w = eContainer.offsetWidth;
const h = eContainer.offsetHeight;

// const [w, h] = [512 + 64, 256 + 64];

const cnvs = document.createElement('canvas');
const ctx = cnvs.getContext('2d');

cnvs.width = w;
cnvs.height = h;
// cnvs.style = 'background-color: #fff;';


const w0 = 256;
const h0 = 256;
// tile
for (let y = 0; y < 6; y++) {
  for (let x = 0; x < 6; x++) {
    const x0 = x * w0;
    const y0 = y * h0;
    const x1 = x0 + w0;
    const y1 = y0 + h0;
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#0f0';
    ctx.beginPath();
    ctx.moveTo(x0, y0); ctx.lineTo(x1, y1);
    ctx.moveTo(x0, y1); ctx.lineTo(x1, y0);
    ctx.rect(x0+0.5, y0+0.5, w0-1, h0-1);
    ctx.stroke();
    ctx.font = '50px serif';
    ctx.textBaseline = 'top';
    ctx.strokeText(' ' + x + '-' + y, x0, y0);
    // cxt.fillStyle = 'hsl(' + (x * 6 + y * 10) + ', 50%, 50%)';
    // cxt.fillRect(x << 7, y << 7, 128, 128);
  }
}

// cxt.drawImage(cnvs, 1 << 5, 1 << 5, 1024, 1024, 0, 0, 1024, 1024); // scroll left

eZoom.addEventListener('wheel', e => {
  console.log(e.deltaX, e.deltaY);
});

eZoom.appendChild(cnvs);


// container.addEventListener('resize', (event) => console.log(event.detail));

/* eslint-env browser */
