const $ = require('jquery');
const artT = require('art-template');
require('./big_image.less');

const Index = (() => {

  // 该模块
  const _e = {};

  // 操作dom
  const ele = {
    ROOT: '',
  };

  // 全局操作数据
  const _g = {
    // 渲染数据
    data: {},
    id: '',
  };

  // 枚举
  const ENUM = {};

  // 初始化
  _e.init = (data, index) => {
    _g.data = JSON.parse(data);
    _g.id = `big_image_${index}`;
    console.log('大图', _g)
    return render();
  }

  // 渲染函数
  function render() {
    const tpl = require('./big_image.tpl')();
    const tplRender = artT.compile(tpl);

    return tplRender(_g);
  }

  // 初始化事件
  function initEvent() { }

  return _e;

})();

module.exports = Index;
