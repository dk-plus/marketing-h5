'use strict';

const Render = require('./render.js');
const Utils = require('../../lib/utils.js');

!(() => {
  console.log('%cdkplus-', `
    background: #cacaca;
    padding: 0 5px;
    border-radius: 50px 150px 10px 50px;
    font-size: 14px;
    color: #fff;
  `);
  console.log('%cdev-pro', `
    background: #16c716;
    padding: 0 5px;
    border-radius: 10px 10px 50px 50px;
    font-size: 14px;
    color: #fff;
  `);

  Render.init();

})();