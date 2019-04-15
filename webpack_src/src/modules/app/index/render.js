/**
 * 总渲染模块
 */
'use strict';

const $ = require('jquery');
const artT = require('art-template');
const Swiper = require('swiper/dist/js/swiper');

const Article = require('../../components/article/article');
const BigImage = require('../../components/big_image/big_image');
const Carousel = require('../../components/carousel/carousel');
const ImageText = require('../../components/image_text/image_text');
const PopUp = require('../../components/pop_up/pop_up');
const Share = require('../../components/share/share');
const Video = require('../../components/video/video');
const NotFoundPage = require('../../components/404/404');

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
    Api.proxyGet('activity', query, res => {
      render();
      console.log('hi',res)
      // console.log(res[0].modules)

      // 活动存在
      let result;
      if (res && res.length > 0) {
        result = res[0];
        console.log(result.endTime-Date.now())
      } else {
        NotFoundPage.init({
          title: '页面不存在'
        });
        return;
      }

      // 网页名称
      if (result.name) {
        document.title = result.name;
      }

      // 活动过期
      if (result.endTime-Date.now() < 0) {
        NotFoundPage.init({
          title: '活动过期'
        });
        return;
      }

      // 活动下线
      if (result.status === Enum.STATUS.OFFLINE) {
        NotFoundPage.init({
          title: '活动已下线'
        });
        return;
      }

      result.modules.map((item, index) => {
        console.log(item)
        switch (item.type) {
          case MODULE_TYPE.ARTICLE:
            insert(Article, item, index);
            break;
          case MODULE_TYPE.BIG_IMAGE:
            insert(BigImage, item, index);
            break;
          case MODULE_TYPE.CAROUSEL:
            insert(Carousel, item, index);
            new Swiper(`#carousel_${index+1}`, {
              autoplay: true,
            });
            break;
          case MODULE_TYPE.IMAGE_TEXT:
            insert(ImageText, item, index);
            break;
          case MODULE_TYPE.POP_UP:
            insert(PopUp, item, index);
            break;
          case MODULE_TYPE.SHARE:
            insert(Share, item, index);
            break;
          case MODULE_TYPE.VIDEO:
            insert(Video, item, index);
            break;
          default:
            break;
        }
      });
    });
  }

  // 插入模块
  function insert(component, item, index) {
    $(ele.ROOT).append(`
      <div class="module" data-type="${item.type}" data-sort="${item.sort}">
        ${component.init(item.data, index+1)}
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