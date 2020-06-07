'use strict';

const BaseController = require('./base.js');

class RoleController extends BaseController {
  async index() {
    // this.ctx.body = '角色俩表';
    let result = await this.ctx.model.Role.find()
    await this.ctx.render('admin/role/index', {list: result});
  }
  async add() {
    // this.ctx.body = '添加角色';
    await this.ctx.render('admin/role/add');
  }

  async doAdd() {
    console.log(this.ctx.request.body)
    const role = new this.ctx.model.Role({
      title: this.ctx.request.body.title,
      description: this.ctx.request.body.description
    })
    let result = await role.save()
    console.log(result)
    await this.success('/admin/role', '增加角色成功')
  }
  async edit() {
    let id = this.ctx.query.id
    let result = await this.ctx.model.Role.find({'_id': id})

    await this.ctx.render('/admin/role/edit', {list: result[0]});
  }
  async doEdit() {
    console.log(this.ctx.request.body)
    let id = this.ctx.request.body._id;
    let title = this.ctx.request.body.title;
    let description = this.ctx.request.body.description;
    let result = await this.ctx.model.Role.updateOne({'_id': id}, {title, description});
    await this.success('/admin/role', '编辑角色成功')
  }
  // async delete() {
  //   this.ctx.body = '删除角色';
  // }
}

module.exports = RoleController;
