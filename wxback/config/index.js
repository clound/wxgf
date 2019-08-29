const path = require('path')
const utils = require('../libs/utils')
const wechat_file = path.join(__dirname, '../config/accessToken.txt')
const config = {
  port: 8082,
  hostName: '192.168.88.76',
  url: 'http://h2k6219650.qicp.vip', // 服务器地址
  token: 'test', //对应测试号接口配置信息里填的token
  appId: 'wx51e00ae3683cadee', //对应测试号信息里的appID
  secret: 'f6441c8545bda8e32ca32f10cd4ed6cb', //对应测试号信息里的appsecret
  grant_type: 'client_credential', //默认
  template_id: 'KfI-UGaLWbrAgGrlM9iNlCiAsI8GBhk2n_J6CKQnQ0w', // 模板ID
  getAccessToken: function() {
    return utils.readFileAsync(wechat_file)
  },
  saveAccessToken: function(data) {
    data = JSON.stringify(data)
    return utils.writeFileAsync(wechat_file, data)
  }
}
module.exports = config