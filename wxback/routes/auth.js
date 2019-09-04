const Router = require('koa-router')
const router = new Router()
const config = require('../config')
const api = require('../config/api')
const Wechat = require('../wechat/wechat')
const wechat = new Wechat(config)
const httpRequest = require('../libs/request')


router.get('/', async (ctx, next) => {
  let { code } = ctx.query
  if (!code) return
  let res = await wechat.getOpenId(code)
  let data = JSON.parse(res)
  console.log('getopenId---', res, data)
  if (data.openid) {
    ctx.session.openid = data.openid
    let url = api.javaAdmin.findUser
    let options = {method: 'POST', url, body: { wechatid: data.openid }, json: true}
    let res = await httpRequest(options, 'isRegister')
    console.log('registered--', res)
    if ((res.code | 0) === -996) {
      ctx.redirect(`search?code=${data.openid}`)
      next()
    } else {
      ctx.redirect(`signup?code=${data.openid}`)
      next()
    }
  }
})
module.exports = router.routes()