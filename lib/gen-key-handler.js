'use strict';

const genKeyHandler = div => {
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
    div.style.transform = 'translate3d(' + (-x) + 'px, ' + (-y) + 'px, 0px)';
  };
};

module.exports = genKeyHandler;
