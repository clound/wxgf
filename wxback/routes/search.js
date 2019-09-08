const Router = require('koa-router')
const router = new Router()
const path = require('path')
const api = require('../config/api')
const httpRequest = require('../libs/request')
const utils = require('../libs/utils')
const filePath = path.join(__dirname, '../www/index.html')


router.get('/', async (ctx, next) => {
  let content = await utils.readFileAsync(filePath)
  ctx.type = 'text/html'
  ctx.body = content
  next()
})
router.post('/', async (ctx, next) => {
  let { expressNo } = ctx.request.body
  console.log(ctx.session.openid, '---查询物流运单号----', expressNo)
  let url = api.javaAdmin.searchOrder
  let options = {
    method: 'POST',
    url,
    body: {
      wechatid: ctx.session.openid || '',
      ...(expressNo ? {tracknum: expressNo || ''} : {})
    },
    json: true
  }
  let res = await httpRequest(options, 'searchExpressInfo')
  if (!(res.code | 0)) {
    ctx.body = {
      code: 0,
      // data: Array.from({length: 30}).fill({
      //   detail: '从常州发往镇江的途中',
      //   trackNum: Math.floor(Math.random() * 100000)
      // }),
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