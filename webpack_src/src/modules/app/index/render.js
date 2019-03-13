/**
 * 总渲染模块
 */
'use strict';

const $ = require('jquery');
const artT = require('art-template');
const Article = require('../../components/article/article');
const BigImage = require('../../components/big_image/big_image');
const Carousel = require('../../components/carousel/carousel');
const ImageText = require('../../components/image_text/image_text');
const PopUp = require('../../components/pop_up/pop_up');
const Share = require('../../components/share/share');
const Video = require('../../components/video/video');
const Api = require('../../../server/api');
const Enum = require('../../lib/enum');
const Utils = require('../../lib/utils');

const { MODULE_TYPE } = Enum;
require('./index.less');

const Render = (() => {
  const _e = {};

  const ele = {
    ROOT: '#test',
  };

  let data = {
    title: 'resume-generator'
  };

  const query = Utils.getUrlParams();

  _e.init = () => {
    console.log('render init...');
    Api.proxyGet('test', query, res => {
      render();
      console.log('hi',res)
      res && res.length > 0 &&
      res.map((item, index) => {
        switch (item.type) {
          case MODULE_TYPE.ARTICLE:
            insert(Article, item);
            break;
          case MODULE_TYPE.BIG_IMAGE:
            insert(BigImage, item);
            break;
          case MODULE_TYPE.CAROUSEL:
            insert(Carousel, item);
            break;
          case MODULE_TYPE.IMAGE_TEXT:
            insert(ImageText, item);
            break;
          case MODULE_TYPE.POP_UP:
            insert(PopUp, item);
            break;
          case MODULE_TYPE.SHARE:
            insert(Share, item);
            break;
          case MODULE_TYPE.VIDEO:
            insert(Video, item);
            break;
          default:
            break;
        }
      });
    });
  }

  // 插入模块
  function insert(component, item) {
    $(ele.ROOT).append(`
      <div data-type="${item.type}" data-sort="${item.sort}">
        ${component.init(item.data)}
      </div>
    `);
  }

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);
    $('#root').html(tplRender(data));
  }

  return _e;
})();

module.exports = Render;