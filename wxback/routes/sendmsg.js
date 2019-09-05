const Router = require('koa-router');
const router = new Router()
const config = require('../config')
const Wechat = require('../wechat/wechat')
const wechat = new Wechat(config)
const requestData = {
  fisrt: {
    value: '尊敬的客户',
    color: '#173177'
  },
  keyword1: {
    value: 'MacBook pro',
    color: '#2d78f4'
  },
  keyword2: {
    value: '1892788329923891892',
    color: '#1d1d1d'
  },
  keyword3: {
    value: '派送中',
    color: '#1d1d1d'
  },
  keyword4: {
    value: '已从常州集散中心发往镇江集散中心',
    color: '#1d1d1d'
  },
  remark: {
    value: '物流信息跟踪中...',
    color: '#173177'
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
  const postData = ctx.request.body
  console.log(postData)
  let { wechatid: openid, msgJson } = postData 
  let lastres = await wechat.sendMessTemp(openid || '', config.template_id, msgJson)
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