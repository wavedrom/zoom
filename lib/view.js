'use strict';

const genKeyHandler = require('./gen-key-handler.js');

const setupEvents = pane => {

  pane.addEventListener('wheel', e => {
    console.log(e.deltaX, e.deltaY);
  });

  pane.addEventListener('mousedown', e => {
    console.log('mousedown', e);
  });

  pane.addEventListener('mouseup', e => {
    console.log('mouseup', e);
  });

  pane.addEventListener('click', e => {
    console.log('click', e);
  });

  document.addEventListener('keydown', genKeyHandler(pane));

  document.addEventListener('keyup', event => {
    console.log('up ' + event.key);
  });
};

module.exports = (container, options) => {

  const root = document.createElement('div');
  root.className = 'zoom-pane';
  container.appendChild(root);

  setupEvents(root);

  let panes = {
    root
  };

  return {
    panes,
    options
  };
};

/* eslint-env browser */
