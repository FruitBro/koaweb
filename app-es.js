'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _initController = require('./controller/initController');

var _initController2 = _interopRequireDefault(_initController);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _register = require('babel-core/register');

var _register2 = _interopRequireDefault(_register);

var _babelPolyfill = require('babel-polyfill');

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// koa v2.x 看npm中koa-swig的用法和swig使用指南 http://www.iqianduan.net/blog/how_to_use_swig
var app = new _koa2.default();
//根据编译的提示 需要安装

_initController2.default.init(app, _koaSimpleRouter2.default);

app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
  root: _config2.default.get('viewDir'),
  outescape: true,
  cache: 'memory',
  ext: 'html',
  writeBody: false
}));
app.use(server(_config2.default.get('staticDir')));
app.listen(_config2.default.get('port'));
//app.use(serve(__dirname + '/test/fixtures'));
//app.use(async ctx => ctx.body = await ctx.render('index'));
// response 
//app.use(ctx => {
//ctx.body = 'Hello Koa';
//});

//app.listen(3000);

/**
 * middleware文件夹用来进行错误处理
 * config 配置文件
 * controller负责前端路由
 * models进行数据库请求
 * views放html及一些模板
 * public放静态文件css、js
 */
