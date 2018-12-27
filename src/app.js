'use strict';

const ResizeObserver = require('resize-observer-polyfill');

const render = cnvs => {
  const ctx = cnvs.getContext('2d');

  const w0 = 256;
  const h0 = 256;

  cnvs.width = w0 * 32;
  cnvs.height = h0 * 32;

  // tile
  for (let y = 0; y < 32; y++) {
    for (let x = 0; x < 32; x++) {
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
};

const eZoom = document.getElementById('zoom-tile');


// eZoomPane.style

const cnvs = document.createElement('canvas');

const setupResize = (el, cnvs) => {

  // const w = e.contentRect.width;
  // const h = e.contentRect.height;
  //
  // cnvs.width = w - 5;
  // cnvs.height = h - 5;

  render(cnvs);

  const observer = new ResizeObserver((entries) => {
    entries.map(e => {

      console.log('resize', e);

    });
  });

  observer.observe(el);
};

setupResize(eZoom, cnvs);

const eZoomPane = document.getElementById('zoom-pane');

eZoom.addEventListener('wheel', e => {
  console.log(e.deltaX, e.deltaY);
});

eZoom.addEventListener('mousedown', e => {
  console.log('mousedown', e);
});

eZoom.addEventListener('mouseup', e => {
  console.log('mouseup', e);
});

eZoom.addEventListener('click', e => {
  console.log('click', e);
});

const genKeyHandler = () => {
  let x = 0;
  let y = 0;
  return event => {
    console.log('down ' + event.key);
    switch (event.key) {
    case 'ArrowLeft': x -= 64; break;
    case 'ArrowRight': x += 64; break;
    case 'ArrowUp': y -= 64; break;
    case 'ArrowDown': y += 64; break;
    case 'Home': x = 0; y = 0; break;
    }
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    eZoomPane.style.transform = 'translate3d(' + (-x) + 'px, ' + (-y) + 'px, 0px)';
  };
};

document.addEventListener('keydown', genKeyHandler());

document.addEventListener('keyup', event => {
  console.log('up ' + event.key);
});

eZoom.appendChild(cnvs);

// container.addEventListener('resize', (event) => console.log(event.detail));

/* eslint-env browser */
