'use strict'
const urlencode = require('urlencode') //URL编译模块
const config = require('../config')
const redirect_uri = urlencode(`${config.url}/auth`) //这里的url需要转为加密格式，它的作用是访问微信网页鉴权接口成功后微信会回调这个地址，并把code参数带在回调地址中
const scope = 'snsapi_userinfo'
const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.appId}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=STATE&connect_redirect=1#wechat_redirect`
module.exports = {
  "button": [
    {
      "type": "view",
      "name": "物流查询",
      "url": url
    },
    {
      "type": "view",
      "name": "关于我们",
      "url": `${config.url}/about`
    }
  ]
}