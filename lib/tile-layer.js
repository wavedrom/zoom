'use strict';

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

const addTo = tile => view => {
  view.panes.root.appendChild(tile);
  view.panes.tile = tile;
  return tile;
};

module.exports = source => {

  console.log(source);

  const cnvs = document.createElement('canvas');
  render(cnvs);

  const tile = document.createElement('div');
  tile.className = 'zoom-tile';

  tile.appendChild(cnvs);

  return {
    addTo: addTo(tile)
  };

};

/* eslint-env browser */
