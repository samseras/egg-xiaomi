'use strict';
const Controller = require('egg').Controller;

class BaseController extends Controller {
  async success(redirectUrl) {
    // this.ctx.body = '成功'
    await this.ctx.render('/admin/public/success', {
      redirectUrl: redirectUrl
    });
  }
  async error(redirectUrl) {
    await this.ctx.render('/admin/public/error', {
      redirectUrl: redirectUrl
    });
  }
  async verify() {
    var captcha = await this.service.tools.captcha();
    this.ctx.response.type = 'image/svg+xml'; // 指定返回类型
    this.ctx.body = captcha.data; // 给页面返回一张图片
  }
}

module.exports = BaseController;
