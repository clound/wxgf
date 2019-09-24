const Router = require('koa-router');
const router = new Router()
const config = require('../config')
const Wechat = require('../wechat/wechat')
const wechat = new Wechat(config)
const requestData = {
  first: {
    value: '尊敬的客户,润阳物流提醒您,您有新的物流信息啦！',
    color: '#dd8d11'
  },
  keyword1: {
    value: '20',
    color: '#2d78f4'
  },
  remark: {
    value: '点击进如查看运单详情(运单会以列表形式展示)',
    color: '#888'
  }
}
/**
 * 网页授权回调接口，可以获取code
 */
// {
//   "errcode":0,
//    "errmsg":"ok",
//    "msgid":200228332
// }

router.post('/', async function(ctx, next) {
  // const code = ctx.query.code // 微信回调这个接口后会把code参数带过来
  // let res = await wechat.getOpenId(code)
  // console.log(ctx.query, ctx.request)
  const postData = ctx.request.body
  let { wechatid: openid, msgJson } = postData
  let url = `detail`
  // let lastres = await wechat.sendMessTemp(openid || '', config.template_id, JSON.parse(msgJson))
  let lastres = await wechat.sendMessTemp(openid || '', config.template_id, url, requestData)
  // console.log(postData, JSON.parse(msgJson))
  // console.log('sendmsg---', ctx.session, postData, openid, msgJson)
  if (!(lastres.errcode | 0)) {
    ctx.body = {
      code: 0,
      msg: '推送消息成功',
      msgid: lastres.msgid
    }
  } else {
    ctx.body = {
      code: lastres.errcode,
      msg: '推送消息失败',
      msgid: lastres.errmsg
    }
  }
  next()
})

module.exports = router.routes()