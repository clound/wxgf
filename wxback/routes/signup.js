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
function stringify(str) {
  return JSON.stringify(str)
}

router.get('/', async (ctx, next) => {
  let { code } = ctx.query
  if (!code) return
  let res = await wechat.getOpenId(code)
  let data = JSON.parse(res)
  console.log(res, data)
  if (data.openid) {
    ctx.session.openid = data.openid
    let url = api.javaAdmin.findUser
    let options = {method: 'POST', url, body: { wechatid: data.openid }, json: true}
    let res = await httpRequest(options, 'isRegister')
    if (!(res.code | 0)) {
      
    }
    console.log(res)
  }
  // if (redirect) {
  //   let content = await utils.readFileAsync(filePath)
  //   console.log(ctx.query, ctx.url, ctx.originalUrl)
  //   ctx.type = 'text/html'
  //   ctx.body = content
  //   next()
  // } else {
  //   ctx.redirect(`${ctx.url}&redirect=true`)
  //   next()
  // }
})
router.get('/getcap', async (ctx) => {
  const captcha = svgCaptcha.create({    //这种生成的是随机数验证码
    size: 4,    //验证码长度
    fontSize: 50,   //字体大小
    width: 100,
    height: 35,
    background: '#dadada'
  })
  // console.log(captcha.text)
  ctx.response.type = 'image/svg+xml'
  ctx.session.randomCap = captcha.text.toLowerCase()
  ctx.body = captcha.data
})
router.post('/getphonecode', async (ctx) => {
  let postData = ctx.request.body
  let { code, phone } = postData
  console.log(code, phone, ctx.session.randomCap)
  if (code.toLowerCase() === ctx.session.randomCap) {
    let reg = /^1[1-9][0-9]{9}$/
    if (reg.test(phone)) {
      let url = api.javaAdmin.sendCode
      let options = {method: 'POST', url, body: { phone }, json: true}
      let res = await httpRequest(options, 'getPhoneCode')
      console.log(url, options, res, res.code)
      if (!(res.code | 0)) {
        ctx.session.randomCap = ''
        ctx.session.phonecode = res.repData.vCode
        ctx.body = {
          code: 0,
          message: '短信发送成功'
        }
      } else {
        ctx.body = {
          code: 1,
          message: '短信发送失败'
        }
      }
    } else {
      ctx.body = {
        code: 1,
        message: '手机号码格式不正确'
      }
    }
  } else {
    ctx.body = {
      code: 1,
      message: '验证码不正确'
    }
  }
})
router.post('/', async (ctx, next) => {
  let { code, phone, username, sms } = ctx.request.body
  console.log(ctx.session.phonecode, 'phoecode', code, phone, username, sms)
  if (code) {
    if (ctx.session.phonecode.toString() !== sms) {
      ctx.body = {
        code: 1,
        message: '短信验证失败'
      }
      return
    }
    let url = api.javaAdmin.registerUser
    let options = {
      method: 'POST',
      url,
      body: { 
        phone,
        wechatid: code,
        name: username
      },
      json: true
    }
    let res = await httpRequest(options, 'registerWechat')
    console.log(res, res.code)
    if (!(res.code | 0)) {
      ctx.body = {
        code: 0,
        message: '注册成功'
      }
    } else {
      ctx.body = {
        code: 1,
        message: '注册失败'
      }
    }
  } else {
    ctx.body = {
      code: 1,
      message: '当前不支持注册'
    }
  }
  next()
})
module.exports = router.routes()