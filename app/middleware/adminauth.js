
const Url = require('url')
module.exports = Options => {
  return async function adminauth(ctx, next) {
    /**
     * 1. 用户没有登陆跳转登陆页面
     * 之后登陆以后才可以访问后台管理页面
     * **/


     ctx.state.csrf = ctx.csrf
     ctx.state.prevPage = ctx.request.headers['referer']
    var pathnaem = Url.parse(ctx.request.url).pathname;
    if (ctx.session.userinfo) {
      ctx.state.userinfo = ctx.session.userinfo
        await next()
    } else {
        if (pathnaem === '/admin/login' ||
        pathnaem === '/admin/dologin' ||
        pathnaem === '/admin/verify') {
          await next()
        } else {
          ctx.redirect('/admin/login')
        }
    }
  }
}