const Router = require('koa-router')
const router = new Router()
const urlencode = require('urlencode') //URL编译模块
const config = require('../config')
/**
 * [创建请求微信网页授权接口链接]
 */

router.get('/', function(ctx, next) {
  const appId = config.appId
  // console.log(appid)
  const redirect_uri = urlencode(`${config.url}/code`) //这里的url需要转为加密格式，它的作用是访问微信网页鉴权接口成功后微信会回调这个地址，并把code参数带在回调地址中
  const scope = 'snsapi_userinfo'
  const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=STATE&connect_redirect=1#wechat_redirect`

  const html = `<!DOCTYPE html>
  <html>
      <head>
      <meta charset="utf-8" >
      <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
      <title>微信鉴权引导</title>
      </head>
      <body><a href="${url}">跳转到鉴权页面</a></body>
  </html>`

  ctx.type = 'text/html'
  ctx.body = html
  next()
})
module.exports = router.routes()
