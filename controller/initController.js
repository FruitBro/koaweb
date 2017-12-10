'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexController = require('./indexController');

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllerInit = {
  init: function init(app, router) {
    app.use(router(function (_) {
      _.get('index/index', _indexController2.default, (0, _indexController2.default)());
    }));
  }
};
exports.default = controllerInit;
//let app = new Koa()
// 
//app.use(router(_ => {
//_.get('/', (ctx, next) => {
//  ctx.body = 'hello'
//})
//_.post('/name/:id', (ctx, next) => {
//  // ... 
//})
//})
