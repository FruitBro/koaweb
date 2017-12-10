
import  Koa from 'koa';
import router from 'koa-simple-router';
import initController from './controller/initController';
import serve from 'koa-static';
import render from 'koa-swig';
import convert from 'koa-convert';//koa1转换器
 // koa v2.x 看npm中koa-swig的用法和swig使用指南 http://www.iqianduan.net/blog/how_to_use_swig
import co from 'co';
//根据编译的提示 需要安装
import babel_co from 'babel-core/register';
import babel_po from 'babel-polyfill';
import Config from './config/config';
const app = new Koa();
initController.init(app,router);

app.context.render = co.wrap(render({
  root: Config.get('viewDir'),
  outescape:true,
  cache: 'memory',
  ext: 'html',
  writeBody:false
}));
app.use(convert(serve(Config.get('staticDir'))));
app.listen(Config.get('port'));
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
 * models进行数据库请求 接口写在此文件夹
 * views放html及一些模板
 * public放静态文件css、js
 * test用于存放测试
 */
