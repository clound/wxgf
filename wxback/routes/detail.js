const Router = require('koa-router')
const router = new Router()
const path = require('path')
const api = require('../config/api')
const httpRequest = require('../libs/request')
const utils = require('../libs/utils')
const filePath = path.join(__dirname, '../www/index.html')


router.get('/', async (ctx, next) => {
  console.log('detail page---', ctx.session)
  let content = await utils.readFileAsync(filePath)
  ctx.type = 'text/html'
  ctx.body = content
  next()
})
router.post('/', async (ctx, next) => {
  let { wechatid, expressno } = ctx.request.body
  console.log(ctx.session.openid, wechatid, '---查询物流运单详情----', expressno)
  let url = api.javaAdmin.searchExpressDetail
  let options = {
    method: 'POST',
    url,
    body: {
      wechatid: wechatid || '',
      tracknumList: expressno || ''
    },
    json: true
  }
  console.log(url);
  let res = await httpRequest(options, 'searchExpressDetail')
  console.log(res)
  if (!(res.code | 0)) {
    ctx.body = {
      code: 0,
      data: res.repData.list || [],
      message: '成功'
    }
  } else {
    ctx.body = {
      code: 1,
      message: '查询失败'
    }
  }
  next()
})
module.exports = router.routes()