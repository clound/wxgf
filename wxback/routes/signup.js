const Router = require('koa-router')
const router = new Router()
const path = require('path')
const config = require('../config')
const Wechat = require('../wechat/wechat')
const wechat = new Wechat(config)
const utils = require('../libs/utils')
const filePath = path.join(__dirname, '../www/index.html')
router.get('/', async function(ctx, next) {
  let { code, isredirect } = ctx.query
  if (!code) return
  if (isredirect) {
    let content = await utils.readFileAsync(filePath)
    console.log( ctx.query, ctx.url, ctx.originalUrl)
    ctx.type = 'text/html'
    ctx.body = content
    next()
  } else {
    ctx.redirect(`${ctx.url}&isredirect=true`)
    next()
  }
})
router.post('/', async function(ctx, next) {
  let postData = ctx.request.body
  if (postData.code) {
    let res = await wechat.getOpenId(postData.code)
    let data = JSON.parse(res)
    console.log(data.openid)
    if (data.openid) {
      ctx.body = {
        code: 1,
        succeess: 'ok'
      }
    } else {
      ctx.body = {
        code: 1,
        succeess: 'failed'
      }  
    }
  } else {
    ctx.body = {
      code: 1,
      succeess: 'failed'
    }
  }
  next()
})
module.exports = router.routes()