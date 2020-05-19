'use strict';

const BaseController = require('./base.js');

class AccessController extends BaseController {
  async index() {
    // this.ctx.body = '权限列表'
    await this.ctx.render('/admin/access/index');
  }
  async add() {
    // this.ctx.body = '增加权限'
    await this.ctx.render('/admin/access/add');
  }
  async edit() {
    // this.ctx.body = '编辑权限'
    await this.ctx.render('/admin/access/edit');
  }
  async delete() {
    this.ctx.body = '删除权限'
  }
}

module.exports = AccessController;
