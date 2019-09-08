const Koa = require('koa') //web服务框架模块
const app = new Koa()
const session=require('koa-session')
const static = require('koa-static')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const router = require('./routes')
const config = require('./config')

const logsUtil = require('./libs/logs.js');
app.use(async (ctx, next) => {
    const start = new Date();                             // 响应开始时间
    let intervals;                                            // 响应间隔时间
    try {
        await next();
        intervals = new Date() - start;
        logsUtil.logResponse(ctx, intervals);     //记录响应日志
    } catch (error) {
        intervals = new Date() - start;
        logsUtil.logError(ctx, error, intervals);//记录异常日志
    }
})
app.keys = ['koawxgzh']
app.use(session({
  key: 'koawx', /** cookie的名称，可以不管 */
  maxAge: 7200000, /** (number) maxAge in ms (default is 1 days)，cookie的过期时间，这里表示2个小时 */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: false, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
}, app));
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
// app.use(cors({
//   origin: [ 'http://localhost:8080'], // 允许这个域名的 跨域请求
//   exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//   maxAge: 5,
//   credentials: true,
//   allowMethods: ['GET', 'POST', 'DELETE'],
//   allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
// }));
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.port, config.hostName, function() {
  console.log(`服务器运行在http://${config.hostName}:${config.port}`)
})
