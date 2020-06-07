'use strict';

const BaseController = require('./base.js');

class LoginController extends BaseController {
  async index() {
    await this.ctx.render('/admin/login');
  }
  async doLogin() {
    console.log(this.ctx.request.body);
    let username = this.ctx.request.body.username;
    let password = await this.service.tools.md5(this.ctx.request.body.password);
    let verify = this.ctx.request.body.verify;
    console.log(password)
    if (verify.toUpperCase() !== this.ctx.session.code.toUpperCase()) {
      await this.error('/admin/login', '验证码不正确！');
    } else {
      let results = await this.ctx.model.Admin.find({});
      console.log(results)
      let result = await this.ctx.model.Admin.find({'userName': username, 'password': password});
      if (result.length > 0) {
        // 保存用户信息
        this.ctx.session.userinfo = result[0]
        // 跳转到用户中心
        this.ctx.redirect('/admin/manager')
      } else {
        await this.error('/admin/login', '用户名或密码不正确')
      }
    }
  }
  async loginOut() {
    this.ctx.session.userinfo = null;
    this.ctx.redirect('/admin/login')
  }
}

module.exports = LoginController;
