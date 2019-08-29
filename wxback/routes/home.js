const Router = require('koa-router');
const router = new Router()
const rawBody = require('raw-body')
const sha1 = require('sha1') //加密模块
// const tpl = require('../libs/tpl')
const config = require('../config')

const wexinReply = require('../wechat/reply')
const utils = require('../libs/utils')
/**
 * [验证微信接口配置信息，]
 */
router.get('/', (ctx, next) => {
  const token = config.token || '' //获取配置的token
  let { signature, nonce, timestamp, echostr } = ctx.query

  const str = [token, timestamp, nonce].sort().join('') //排序token、timestamp、nonce后转换为组合字符串
  const sha = sha1(str) //加密组合字符串

  //如果加密组合结果等于微信的请求参数signature，验证通过
  if (sha === signature) {
    console.log('验证成功', echostr)
    ctx.body = echostr + '' //正常返回请求参数echostr
  } else {
    ctx.body = '验证失败'
  }
})
router.post('/', async (ctx) => {
  //通过raw-body模块接收接口传过来的xml数据
  var data = await rawBody(ctx.req, { length: ctx.length, limit: '1mb', encoding: ctx.charset });
  console.log(data.toString())
  // var jsonObj = tpl.xmlToJson(data);
  let jsonObj = await utils.parseXMLAsync(data)
  let message = utils.formatMessage(jsonObj.xml)
  let reply = await wexinReply.reply(message);
  ctx.status = 200;
  ctx.type = 'application/xml';
  ctx.body = reply;
})

module.exports = router.routes()