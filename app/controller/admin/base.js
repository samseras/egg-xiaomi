'use strict';
const Controller = require('egg').Controller;

class BaseController extends Controller {
  async success(redirectUrl, message) {
    // this.ctx.body = '成功'
    await this.ctx.render('/admin/public/success', {
      redirectUrl: redirectUrl,
      message: message || '操作成功'
    });
  }
  async error(redirectUrl, message) {
    await this.ctx.render('/admin/public/error', {
      redirectUrl: redirectUrl,
      message: message || '操作失败'
    });
  }
  async verify() {
    var captcha = await this.service.tools.captcha();
    this.ctx.response.type = 'image/svg+xml'; // 指定返回类型
    this.ctx.body = captcha.data; // 给页面返回一张图片
  }
  async delete() {
    /**
     * 删除那张表， 删除得id
     * 返回上一个操作界面
     *  this.ctx.request.headers[referer]
     * 
    */
   let model = this.ctx.query.model;
   let id = this.ctx.query.id;
   let result = await this.ctx.model[model].deleteOne({'_id': id})
   this.ctx.redirect(this.ctx.stale.prevPage)
  }
}

module.exports = BaseController;
