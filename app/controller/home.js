'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    
    await ctx.render('index.html');
  }

  // 代理
  async proxy() {
    const { ctx, config } = this;
    const searchParams = new URLSearchParams(ctx.query).toString();
    // 转发请求： server：服务器， method：请求接口
    const proxyUrl = `${config.system.server}${ctx.params.method}?${searchParams}`;
    const result = await ctx.curl(proxyUrl);
    const data = Buffer.from(result.data).toString();
    ctx.body = data;
  }
}

module.exports = HomeController;
