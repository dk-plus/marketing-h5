const $ = require('jquery');
const artT = require('art-template');

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
  };

  // 枚举
  const ENUM = {};

  // 初始化
  _e.init = (data) => {
    _g.data = data;
    console.log('轮播图', _g)
    return render();
  }

  // 渲染函数
  function render() {
    const tpl = require('./carousuel.tpl')();
    const tplRender = artT.compile(tpl);

    return tplRender(_g.data);
  }

  // 初始化事件
  function initEvent() { }

  return _e;

})();

module.exports = Index;
