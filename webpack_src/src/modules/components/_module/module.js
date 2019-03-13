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

  // 开发配置
  const config = {
    mockMode: true,
  }

  // 初始化
  _e.init = () => {
    render();
  }

  // 渲染函数
  function render() {
    const tpl = require('./indexFile.tpl')();
    const tplRender = artT.compile(tpl);

    $(ele.ROOT).html(tplRender(_g.data));
  }

  // 初始化事件
  function initEvent() {}

  return _e;

})();

module.exports = Index;
