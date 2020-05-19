'use strict';

const BaseController = require('./base.js');

class ManagerController extends BaseController {
  async index() {
    // this.ctx.body = '管理员列表';
    await this.ctx.render('admin/manager/index');
  }
  async add() {
    // this.ctx.body = '添加管理员或';
    await this.ctx.render('admin/manager/add');
  }
  async edit() {
    // this.ctx.body = '编辑管理员';
    await this.ctx.render('admin/manager/edit');
  }
  async delete() {
    this.ctx.body = '删除管理员';
    // await this.ctx.render('admin/manage/add');
  }
}

module.exports = ManagerController;
