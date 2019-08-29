const Koa = require('koa') //web服务框架模块
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const path = require('path')
const router = require('./routes')
const config = require('./config')
const static = require('koa-static')
// 使用ctx.body解析中间件
app.use(bodyParser())
// 配置静态web服务的中间件
app.use(static(path.join(__dirname, 'www')))
/**
 * [开启跨域便于接口访问]
 */
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', ctx.headers.origin); // 很奇怪的是，使用 * 会出现一些其他问题
  ctx.set('Access-Control-Allow-Headers', 'content-type');
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH')
  await next();
});
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.port, config.hostName, function() {
  console.log(`服务器运行在http://${config.hostName}:${config.port}`)
})
