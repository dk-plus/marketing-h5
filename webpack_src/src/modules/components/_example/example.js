const $ = require('jquery');
const artT = require('art-template');

// 常量
const NAME = 'Example';
const VERSION = '0.1.0';
const ClassName = {};
const Selector = {};
const ENUM = {};

class Example {
  // 构造函数
  constructor(option) {
    this.option = option;
  }

  // set方法，改变option值触发
  set option(opt) {
    this._option = opt;
  }

  // get方法，读取option值触发
  get option() {
    return this._option;
  }

  // 原型方法，由Example生产的对象直接调用
  // 公有方法
  doSomething() {
    console.log('do sth 1');
  }

  // 私有方法
  _doSomething() {
    console.log('do sth 2');
  }

  // 静态方法，可通过Example类直接调用
  static doSomething() {
    console.log('do sth 3');
  }

}

module.exports = Example;