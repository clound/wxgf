const prefix = 'https://api.weixin.qq.com/cgi-bin/'
const userOpenIdPrefix = 'https://api.weixin.qq.com/sns/oauth2/access_token?'

const javaPrefix = 'http://www.dyry.top'
const allAPi = {
  access_token: prefix + 'token?grant_type=client_credential',                 //获取access_token
  getWeixinIp: prefix + 'getcallbackip?',                                      //获取微信服务器的ip
  semanticPrefix: 'https://api.weixin.qq.com/semantic/semproxy/search?',       //语义理解接口
  autoreplyInfo: prefix + 'get_current_autoreply_info?',                       //获取公众号的自动回复规则       
  //菜单
  menu: {
    createMenu: prefix + 'menu/create?',                          //创建自定义菜单
    inquiryMenu: prefix + 'menu/get?',                            //自定义菜单查询接口
    deleteMenu: prefix + 'menu/delete?',                          //删除菜单查询接口
    getCofigMess: prefix + 'get_current_selfmenu_info?',          //获取自定义菜单配置信息 
  },
  //个性化菜单
  specialMenu: {
    createMenu: prefix + 'menu/addconditional?',                 //创建菜单
    deleteMenu: prefix + 'menu/delconditional?',                 //删除菜单
    testMatch: prefix + 'menu/trymatch?',                        //测试个性化菜单匹配结果
    //个性化菜单的删除,查询都和自定义菜单的删除.查询是同一个接口
  },
  //临时素材
  temporary: {
    upload: prefix + 'media/upload?',                                          //上传临时素材
    fetch: prefix + 'media/get?',                                              //获取临时素材
    getImgUrl: prefix + 'media/uploadimg?',                                    //群发消息 上传图文消息内的图片获取url,
    uploadNews: prefix + 'media/uploadnews?',                                  //群发消息 上传图文消息素材
  },
  //永久素材
  permanent: {
    upload: prefix + 'material/add_material?',                               //用于上传图片和视频
    uploadNews: prefix + 'material/add_news?',                               //用于上传图文
    uploadNewsPic: prefix + 'material/uploadimg?',                           //用于上传图文里面的图片
    fetch: prefix + 'material/get_material?',                                //获取永久素材
    delete: prefix + 'material/del_material?',                               //删除永久素材
    modify: prefix + 'material/update_news',                                 //修改永久图文素材
    getCount: prefix + 'material/get_materialcount?',                        //获取永久素材的总数
    batch: prefix + 'material/batchget_material?',                           //获取永久素材的总数
  },
  //标签
  tags: {
    createTag: prefix + 'tags/create?',                         //创建标签
    inquiryTag: prefix + 'tags/get?',                            //查询用户标签
    editTag: prefix + 'tags/update?',                            //编辑用户标签
    deleteTag: prefix + 'tags/delete?',                          //删除用户标签
    getTagFans: prefix + 'user/tag/get?',                        //获取标签下粉丝列表
    batchTagUers: prefix + 'tags/members/batchtagging?',         //批量为用户创建标签
    batchCancelTag: prefix + 'tags/members/batchuntagging?',     //批量为用户取消标签
    fetchUserTags: prefix + 'tags/getidlist?',                   //获取用户身上的标签列表

  },
  //用户管理
  user: {
    remarkUser: prefix + 'user/info/updateremark?',                 //设置用户备注名
    fetchUserMess: prefix + 'user/info?',                           //获取用户基本信息
    getUserList: prefix + 'user/get?',                              //获取用户列表
    getOpenId: userOpenIdPrefix
  },
  //消息模板
  messTemp: {
    setTemp: prefix + 'template/api_set_industry?',              //设置所属行业
    getTemp: prefix + 'template/get_industry?',                  //获取设置的行业信息
    getTempId: prefix + 'template/api_add_template?',            //获取模板ID
    fetchTempList: prefix + 'template/get_all_private_template?', //获取模板列表
    delMessTemp: prefix + 'template/del_private_template?',      //删除模板
    sendTempMess: prefix + 'message/template/send?',             //发送模板消息 
  },
  //群发消息
  message: {
    sendMessByTag: prefix + 'message/mass/sendall?',        //根据用户标签进行群发
    sendMessByOpenID: prefix + 'message/mass/send?',        //根据openID列表进行群发
    deleteMess: prefix + 'message/mass/delete?',            //删除群发
    priviewMess: prefix + 'message/mass/preview?',          //预览接口
  },
  //用户管理
  manage: {
    createQrcodeTicket: prefix + 'qrcode/create?',         //请求二维码的 ticket
    createQrcode: prefix + 'showqrcode?',                  //通过ticket获取二维码
    changeToShort: prefix + 'shorturl?',                    //长连接转成短连接
  },
  ticket: {
    get: prefix + 'ticket/getticket?',                            //获取全局票据
  },
  // java 后台
  javaAdmin: {
    findUser: javaPrefix + `/out/wc_vregister`, // 判断用户是否已经注册
    sendCode: javaPrefix + '/out/wc_sms', // 发送短信验证码
    registerUser: javaPrefix + '/out/wc_register', // 微信用户注册
    searchOrder: javaPrefix + '/out/wc_query', // 查询运单号,
    searchExpressDetail: javaPrefix + '/out/wc_batch_query' // 查询运单集合详情,
  }
}
module.exports = allAPi