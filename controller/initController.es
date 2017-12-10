import index from './indexController';
 
 const controllerInit = {
 	init(app,router) {
 		app.use(router(_=> {
 			_.get('index/index',index,index())
 		}))
 	}
 }
 export default controllerInit;
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