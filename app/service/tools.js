'use strict';
var svgCaptcha = require('svg-captcha');
var md5 = require('md5')

const Service = require('egg').Service;

class ToolsService extends Service {
  async captcha() {
    var captcha = svgCaptcha.create({
        size: 4,
        fontSize: 50,
        width: 100,
        height: 40,
        background: '#cc9966'
      });
      this.ctx.session.code = captcha.text; // 验证码上边的信息
      return captcha
  }
  async md5(str) {
    return md5(str)
  }
}

module.exports = ToolsService;
