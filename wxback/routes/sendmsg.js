const Router = require('koa-router');
const router = new Router()
const config = require('../config')
const Wechat = require('../wechat/wechat')
const template = require('../config/template')
const utils = require('../libs/utils')
const wechat = new Wechat(config)
/**
 * 运单详情
 * @param { String } userName
 * @param { String } expressNo
 * @param { String } expressStatus
 * @param { String } expressInfo
 * @return "errcode":0, "errmsg":"ok", "msgid":200228332
*/
router.post('/detail', async function(ctx, next) {
  // const code = ctx.query.code // 微信回调这个接口后会把code参数带过来
  // let res = await wechat.getOpenId(code)
  // console.log(ctx.query, ctx.request)
  const postData = ctx.request.body
  let { wechatid: openid, msgJson } = postData
  let detailTempalte = template.detailTemplate
  let qJson = JSON.parse(msgJson)
  // let qJson = msgJson
  // console.log(msgJson)
  detailTempalte['keyword1']['value'] = qJson.userName
  detailTempalte['keyword2']['value'] = qJson.expressNo
  detailTempalte['keyword3']['value'] = qJson.expressStatus
  detailTempalte['remark']['value'] = `\n${qJson.expressInfo}`
  // console.log(detailTempalte)
  // let lastres = await wechat.sendMessTemp(openid || '', config.detail_templateId, JSON.parse(msgJson))
  let lastres = await wechat.sendMessTemp(openid || '', config.detail_templateId, detailTempalte)
  // console.log(postData, JSON.parse(msgJson))
  console.log('sendmsg---', ctx.session, postData, openid, msgJson)
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
/**
 * 运单总量 请求数据
 * @param { String } userName,
 * @param { Number} expressTotal,
 * @param { String } expressCollection
 * @return "errcode":0, "errmsg":"ok", "msgid":200228332
*/
router.post('/collection', async function(ctx, next) {
  const postData = ctx.request.body
  let { wechatid: openid, msgJson } = postData
  let totalTemplate = template.totalTemplate
  let qJson = JSON.parse(msgJson)
  // let qJson = msgJson
  ctx.session.openid = openid
  // console.log(postData, JSON.parse(msgJson))
  let tip = `润阳物流提醒您,您的运单状态更新啦！\n`
  totalTemplate['first']['value'] = `尊敬的客户${qJson.userName},${tip}`
  totalTemplate['keyword1']['value'] = utils.parseTime(new Date(), '{y}-{m}-{d} {h}:{i}:{s}')
  totalTemplate['keyword2']['value'] = `您有${qJson.expressTotal}运单状态发生变化啦!`
  let url = `${config.url}/detail?wechatid=${openid}&expressno=${qJson.expressCollection}`
  // let lastres = await wechat.sendMessTemp(openid || '', config.total_templateId, JSON.parse(msgJson))
  let lastres = await wechat.sendMessTemp(openid || '', config.total_templateId, totalTemplate, url)
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