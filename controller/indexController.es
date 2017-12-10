"use strict"

const indexController = {
	index() {
		//async await为es7代码
		//用koa-swig模板
		return async(ctx,next)=> {
			ctx.body= await ctx.render('index.html',{
				title: "大拇指点赞"
			})
		}
	}
}

export default indexController;
