'use strict';

const BaseController = require('./base.js');

class RoleController extends BaseController {
  async index() {
    // this.ctx.body = '角色俩表';
    await this.ctx.render('admin/role/index');
  }
  async add() {
    // this.ctx.body = '添加角色';
    await this.ctx.render('admin/role/add');
  }
  async edit() {
    this.ctx.body = '编辑角色';
  }
  async delete() {
    this.ctx.body = '删除角色';
  }
}

module.exports = RoleController;
