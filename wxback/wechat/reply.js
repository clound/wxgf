const path = require('path')
const urlencode = require('urlencode') //URL编译模块
const config = require('../config')
const redirect_uri = urlencode(`${config.url}/auth`) //这里的url需要转为加密格式，它的作用是访问微信网页鉴权接口成功后微信会回调这个地址，并把code参数带在回调地址中
const scope = 'snsapi_userinfo'
const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.appId}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=STATE&connect_redirect=1#wechat_redirect`

const menu = require('./menu')
const Wechat = require('./wechat')
const wechat = new Wechat(config)

setTimeout(async () => {
  await wechat.deleteDefineMenu()
  await wechat.createDefineMenu(menu)
  return;
}, 100)

exports.reply = async function (obj) {
  var message = obj;
  var now = new Date().getTime();
  var reply = '';
  //判断消息类型是否是事件推送
  if (message.MsgType === 'event') {
    reply = '';
    //判断事件类型是否为关注
    if (message.Event === 'subscribe') { //订阅
      if (message.EventKey) {
        console.log('扫二维码进来: ' + message.EventKey + ' ' + message.Ticket);
      }
      //ejs模板中的<%= %>是转义的, <%- %>是保留原格式的
      reply = '<xml>' +
        '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
        '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
        '<CreateTime>' + now + '</CreateTime>' +
        '<MsgType><![CDATA[text]]></MsgType>' +
        '<Content><![CDATA[欢迎关注润阳物流\n点击物流查询: 查看物流动态详情\n]]></Content>' +
        '</xml>';
    }
    else if (message.Event === 'unsubscribe') { //取消订阅
      reply = '<xml>' +
        '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
        '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
        '<CreateTime>' + now + '</CreateTime>' +
        '<MsgType><![CDATA[text]]></MsgType>' +
        '<Content><![CDATA[]]></Content>' +
        '</xml>';
    }
    else if (message.Event === 'CLICK') { //点击
      var movieList = {}
      if (message.EventKey == 'rselfmenu_1_0') {
        console.log('排行榜')
        movieList = await wechat.searchMovies('3', '');

      } else {
        console.log('喜剧');
        movieList = await wechat.searchMovies('1', message.EventKey);
      }
      if (movieList && movieList.length > 0) {
        reply = '<xml>' +
          '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
          '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
          '<CreateTime>' + now + '</CreateTime>' +
          '<MsgType><![CDATA[news]]></MsgType>' +
          '<ArticleCount>5</ArticleCount>' +
          '<Articles>';
        movieList.subjects.forEach(element => {
          reply +=
            '<item>' +
            '<Title><![CDATA[' + element.title + ']]></Title>' +
            '<Description><![CDATA[导演: ' + element.directors[0].name + ' 分类: ' + element.genres[0] + ',' + element.genres[1] + ' 年份: ' + element.year + ']]></Description>' +
            '<PicUrl><![CDATA[' + element.images.large + ']]></PicUrl>' +
            '<Url><![CDATA[' + element.alt + ']]></Url>' +
            '</item>';
        });
        reply += '</Articles></xml>';
      } else {
        reply += '<xml>' +
          '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
          '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
          '<CreateTime>' + now + '</CreateTime>' +
          '<Content><![CDATA[嘤嘤嘤~~~没找到客官想要的电影~~~]]></Content>' +
          '<MsgType><![CDATA[text]]></MsgType></xml>';
      }

    }
    else if (message.Event === 'SCAN') {  //扫描
      console.log('看到你扫了一下奥: ' + message.EventKey + message.Ticket);
      reply = '<xml>' +
        '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
        '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
        '<CreateTime>' + now + '</CreateTime>' +
        '<MsgType><![CDATA[text]]></MsgType>' +
        '<Content><![CDATA[你扫了我公众号的二维码奥~]]></Content>' +
        '</xml>';
    }
    else if (message.Event === 'scancode_push') {  //扫描推送
      console.log('扫描推送: ' + message.ScanCodeInfo.ScanType + message.ScanCodeInfo.ScanResult);
      reply = '<xml>' +
        '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
        '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
        '<CreateTime>' + now + '</CreateTime>' +
        '<MsgType><![CDATA[text]]></MsgType>' +
        '<Content><![CDATA[' + + message.ScanCodeInfo.ScanResult + ']]></Content>' +
        '</xml>';
    }
    else if (message.Event === 'scancode_waitmsg') {  //扫描推送等待
      console.log('扫描推送等待: ' + message.ScanCodeInfo.ScanType + message.ScanCodeInfo.ScanResult);
      reply = '<xml>' +
        '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
        '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
        '<CreateTime>' + now + '</CreateTime>' +
        '<MsgType><![CDATA[text]]></MsgType>' +
        '<Content><![CDATA[' + message.ScanCodeInfo.ScanResult + ']]></Content>' +
        '</xml>';
    }
    else if (message.Event === 'pic_sysphoto') {  //系统拍照发图
      //MsgId: 6493717817254345000, MediaId: 'alN6kSj799alQpR6pcsCYYqCnP_C5MvZaG-1CWcp1KRSWeKyLM2-N-Hgbvs0Qdz9'
      //PicUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/xP9q8PjjV6BiaFVJdAR07iaC4ggSdjZGxz5rt6giakxFtnRichms4G7wIicXsFicRiaCVr0xp9ibzZdmrica46DeRDSECUg/0
      // reply = '<xml>' +
      //   '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
      //   '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
      //   '<CreateTime>' + now + '</CreateTime>' +
      //   '<MsgType><![CDATA[text]]></MsgType>' +
      //   '<Content><![CDATA[哇,你拍的照片好美呀!]]></Content>' +
      //   '</xml>';
      reply = '<xml>' +
        '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
        '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
        '<CreateTime>' + now + '</CreateTime>' +
        '<MsgType><![CDATA[text]]></MsgType>' +
        '<Content><![CDATA[您可以点击<a href="'+ url + '">物流查询</a>进行查询\n]]></Content>' +
        '</xml>';
    }
    else if (message.Event === 'pic_photo_or_album') {  //拍照或者相册发图
      //MsgId: 6493718384190028000, MediaId: 'XEDiMg3NfmjVhR1eV3a8s8DgJ7NzIzzBzwce3DBk2dCMFH5Bg1s-RIbxqzw_szbP'
      //PicUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/xP9q8PjjV6BiaFVJdAR07iaC4ggSdjZGxz9DwHDia0Z41ThE36Hicz9A5Mrdo0yAU42HMJoAIUbhOveticPBZjwO9oQ/0'

      // reply = '<xml>' +
      //   '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
      //   '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
      //   '<CreateTime>' + now + '</CreateTime>' +
      //   '<MsgType><![CDATA[text]]></MsgType>' +
      //   '<Content><![CDATA[哇,你拍的照片好美呀!]]></Content>' +
      //   '</xml>';
      reply = '<xml>' +
        '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
        '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
        '<CreateTime>' + now + '</CreateTime>' +
        '<MsgType><![CDATA[text]]></MsgType>' +
        '<Content><![CDATA[您可以点击<a href="'+ url + '">物流查询</a>进行查询\n]]></Content>' +
        '</xml>';
    }
    else if (message.Event === 'pic_weixin') {  //微信相册发图
      //MsgId: 6493718878111267000,, MediaId: 'hPTpCanfp7tnM7GDKeJoqOSKc3f-URaL8uVNzZWeW6Ed-1_224nLd0L3ImCLuUJP'
      //PicUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/xP9q8PjjV6BiaFVJdAR07iaC4ggSdjZGxzDymtYhN7lzRVOLVQ3Mhlyr0DJI6bdJp6WV92aKK3JiawiaJaibgWQmwibw/0'

      // reply = '<xml>' +
      //   '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
      //   '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
      //   '<CreateTime>' + now + '</CreateTime>' +
      //   '<MsgType><![CDATA[text]]></MsgType>' +
      //   '<Content><![CDATA[哇,你拍的照片好美呀!]]></Content>' +
      //   '</xml>';
      reply = '<xml>' +
        '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
        '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
        '<CreateTime>' + now + '</CreateTime>' +
        '<MsgType><![CDATA[' + message.MsgType + ']]></MsgType>' +
        '<Content><![CDATA[您可以点击<a href="'+ url + '">物流查询</a>进行查询\n]]></Content>' +
        '</xml>';
    }
    else if (message.Event === 'location_select') {  //弹出地理位置选择器
      console.log('纬度: ' + message.SendLocationInfo.Location_X);
      console.log('经度: ' + message.SendLocationInfo.Location_Y);
      console.log('精确度: ' + message.SendLocationInfo.Scale);
      console.log('字符串信息: ' + message.SendLocationInfo.Label);
      console.log('朋友圈的名字: ' + message.SendLocationInfo.Poiname);
      reply = '';
    }
    else if (message.Event === 'VIEW') {
      console.log('您点击了菜单中的链接: ' + message.EventKey);
      reply = '<xml>' +
        '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
        '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
        '<CreateTime>' + now + '</CreateTime>' +
        '<MsgType><![CDATA[text]]></MsgType>' +
        '<Content><![CDATA[再见]]></Content>' +
        '</xml>';
    }
  } else if (message.MsgType === 'text') {
    var content = message.Content;
    reply = '<xml>' +
        '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
        '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
        '<CreateTime>' + now + '</CreateTime>' +
        '<MsgType><![CDATA[' + message.MsgType + ']]></MsgType>' +
        '<Content><![CDATA[您可以点击<a href="'+ url + '">物流查询</a>进行查询\n]]></Content>' +
        '</xml>';
  } else if (message.MsgType === 'image') {
    // reply = '<xml>' +
    //   '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
    //   '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
    //   '<CreateTime>' + now + '</CreateTime>' +
    //   '<MsgType><![CDATA[text]]></MsgType>' +
    //   '<Content><![CDATA[哇~~~,你发的图片好美奥~]]></Content>' +
    //   '</xml>';
    reply = '<xml>' +
        '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
        '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
        '<CreateTime>' + now + '</CreateTime>' +
        '<MsgType><![CDATA[text]]></MsgType>' +
        '<Content><![CDATA[您可以点击<a href="'+ url + '">物流查询</a>进行查询\n]]></Content>' +
        '</xml>';

  } else if (message.MsgType === 'voice') {
    // var content = message.Recognition;
    // console.log(content);
    // reply = '<xml>' +
    //   '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
    //   '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
    //   '<CreateTime>' + now + '</CreateTime>';

    // var movieList = movieList = await wechat.searchMovies('1', content);
    // if (movieList && movieList.length > 0) {
    //   reply += '<MsgType><![CDATA[news]]></MsgType>' +
    //     '<ArticleCount>5</ArticleCount>' +
    //     '<Articles>';
    //   movieList.subjects.forEach(element => {
    //     reply +=
    //       '<item>' +
    //       '<Title><![CDATA[' + element.title + ']]></Title>' +
    //       '<Description><![CDATA[导演: ' + element.directors[0].name + ' 分类: ' + element.genres[0] + ',' + element.genres[1] + ' 年份: ' + element.year + ']]></Description>' +
    //       '<PicUrl><![CDATA[' + element.images.large + ']]></PicUrl>' +
    //       '<Url><![CDATA[' + element.alt + ']]></Url>' +
    //       '</item>';
    //   });
    //   reply += '</Articles></xml>';
    // } else {
    //   reply += '<Content><![CDATA[嘤嘤嘤~~~没找到客官想要的电影~~~]]></Content>' +
    //     '<MsgType><![CDATA[text]]></MsgType></xml>';
    // }
    reply = '<xml>' +
    '<ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>' +
    '<FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>' +
    '<CreateTime>' + now + '</CreateTime>' +
    '<MsgType><![CDATA[text]]></MsgType>' +
    '<Content><![CDATA[您可以点击<a href="'+ url + '">物流查询</a>进行查询\n]]></Content>' +
    '</xml>';
  }

  return reply;
}