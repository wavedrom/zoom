'use strict';

const genKeyHandler = div => {
  let x = 0;
  let y = 0;
  return event => {
    // console.log('down ' + event.key);
    const w = div.clientWidth;
    // const h = div.clientHeight;
    switch (event.key) {
    case 'Home':      x = 0; y = 0; break;
    case 'End':       x = (256 * 32 - w); y = 0; break;

    case 'ArrowLeft':   x -= 64; break;
    case 'ArrowRight':  x += 64; break;
    case 'ArrowUp':     y -= 64; break;
    case 'ArrowDown':   y += 64; break;

    case 'PageUp':      y -= 256; break;
    case 'PageDown':    y += 256; break;
    }

    if (x < 0) { x = 0; }
    if (y < 0) { y = 0; }
    if (x > (256 * 32 - w)) { x = (256 * 32 - w); }

    // console.log(div.offsetWidth, div.offsetHeight);

    div.classList.remove('transition');
    div.style.transform = 'translate3d(' + (-x) + 'px, ' + (-y) + 'px, 0px)';
    div.classList.add('transition');
  };
};

module.exports = genKeyHandler;
