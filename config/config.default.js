/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589809022021_6707';

  config.session = {
    key: 'SESSION_ID',
    maxAge: 864000,
    httpOnly: true,
    encrypt: true, // session 加密
    renew: true, // 刷新
  }


  // add your middleware config here
  config.middleware = ['adminauth'];

  config.adminauth = {
    match: '/admin',
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // ejs
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  // 配置mongoose连接mongodb数据库
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/eggxiaomi',
      options: {},
      // mongoose global plugins, expected a function or an array of function and options
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
