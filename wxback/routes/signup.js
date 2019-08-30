const Router = require('koa-router')
const router = new Router()
const path = require('path')
const svgCaptcha = require('svg-captcha')
const config = require('../config')
const api = require('../config/api')
const Wechat = require('../wechat/wechat')
const wechat = new Wechat(config)
const utils = require('../libs/utils')
const httpRequest = require('../libs/request')
const filePath = path.join(__dirname, '../www/index.html')
router.get('/', async (ctx, next) => {
  let { code } = ctx.query
  if (!code) return
  let res = await wechat.getOpenId(postData.code)
  let data = JSON.parse(res)
  if (data.openid) {
    ctx.openid = data.openid
    let url = api.javaAdmin.findUser
    let options = {method: 'POST', url, body: { openid: data.openid }}
    let res = await httpRequest(options, 'isRegister')
    console.log(res)
  }
  if (redirect) {
    let content = await utils.readFileAsync(filePath)
    console.log(ctx.query, ctx.url, ctx.originalUrl)
    ctx.type = 'text/html'
    ctx.body = content
    next()
  } else {
    ctx.redirect(`${ctx.url}&redirect=true`)
    next()
  }
})
router.get('/getcap', async (ctx) => {
  const captcha = svgCaptcha.create({    //这种生成的是随机数验证码
    size: 4,    //验证码长度
    fontSize: 50,   //字体大小
    width: 100,
    height: 40,
    background: '#cc8801'
  })
  console.log(captcha.text)
  ctx.response.type = 'image/svg+xml'
  ctx.session.randomCap = captcha.text.toLowerCase()
  ctx.body = captcha.data
})
router.post('/', async (ctx, next) => {
  let postData = ctx.request.body
  if (postData.code) {
    
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