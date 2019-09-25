'use strict';
const rp = require('request-promise')
const fs = require('fs')
const path = require('path')
const httpRequest = require('../libs/request')
const menu = require('./menu')
const config = require('../config')
const api = require('../config/api')
const wechat_file = path.join(__dirname, '../config/accessToken.txt')

// 进行票据的读写
function Wechat(opts) {
  this.appID = opts.appId
  this.appSecret = opts.secret
  // this.getAccessToken = opts.getAccessToken
  // this.saveAccessToken = opts.saveAccessToken
  // this.getTicket = opts.getTicket
  // this.saveTicket = opts.saveTicket
  this.fetchToken()
}
Wechat.prototype.fetchToken = function () {
  let that = this
  let appID = this.appID
  let appSecret = this.appSecret
  let url = `${api.access_token}&appid=${appID}&secret=${appSecret}`
  
  return new Promise((resolve, reject) => {
    fs.readFile(wechat_file, {flag: 'r+', encoding: 'utf8'}, (err, data) => {
      if(err) {
        console.log('readfile error', err)
        reject(err)
      }
      let dateObj = data && (JSON.parse(data) || {})
      if (data.length !== 0 && dateObj.expires_in > (new Date().getTime())) {
        that.access_token = dateObj.access_token || ''
        resolve(dateObj)
      } else {
        rp({ url, json: true }).then(response => {
          let resData = response
          that.access_token = resData.access_token || ''
          resData.expires_in = new Date().getTime() + 7100 * 1000
          fs.writeFile(wechat_file, JSON.stringify(resData), (err) => {
            if (err) {
              console.log('write file error', err)
              reject(err)
            } else {
              resolve(resData)
            }
          })
        }).catch(err => {
          reject(err)
        })
      }
    })
  })
}

// 获得微信服务器IP地址
Wechat.prototype.getWeixinServerIp = function() {
  // let that = this
  let url = `${api.getWeixinIp}access_toke=n=${this.access_token}`
  let options = { method: 'GET', url, json: true }
  return httpRequest(options, 'getWeixinServerIp')
}
// 创建自定义菜单
Wechat.prototype.createDefineMenu = function (menu) {
  let url = `${api.menu.createMenu}access_token=${this.access_token}`
  let options = {method: 'POST', url, body: menu, json: true}
  return httpRequest(options, 'createDefineMenu');
}
// 查询自定义菜单
Wechat.prototype.inquiryDefineMenu = function (menu) {
  let url = `${api.menu.inquiryMenu }access_token=${this.access_token}`
  let options = {method: 'GET', url, json: true}
  return httpRequest(options, 'inquiryDefineMenu');
}
// 删除自定义菜单
Wechat.prototype.deleteDefineMenu = function () {
  let url = `${api.menu.deleteMenu}access_token=${this.access_token}`
  let options = {method: 'GET', url, json: true}
  return httpRequest(options, 'deleteDefineMenu')
}
// 获取用户基本信息
Wechat.prototype.fetchUserMess = function (openId, lang) {
  let url = `${api.user.fetchUserMess}access_token=${this.access_token}&openid=${openId}&lang=${lang}`
  let options = {method: 'GET', url, json: true}
  return httpRequest(options, 'fetchUserMess')
}
// 获取用户列表
Wechat.prototype.fetchUserMess = function (openId, lang) {
  let url = `${api.user.getUserList}access_token=${this.access_token}`
  let options = {method: 'GET', url, json: true}
  return httpRequest(options, 'getUserList')
}
// 消息模版 设置所属行业
Wechat.prototype.setMessTemplate = function (postData) {
  let url = `${api.messTemp.setTemp}access_token=${this.access_token}`
  let options = {method: 'POST', url, body: postData, json: true}
  return httpRequest(options, 'setMessTemplate')
}
// 消息模版  获取设置的行业信息
Wechat.prototype.getMessTemplate = function () {
  let url = `${api.messTemp.getTemp}access_token=${this.access_token}`
  let options = {method: 'GET', url, json: true}
  return httpRequest(options, 'getMessTemplate')
}
// 消息模版  获取模版ID
Wechat.prototype.getMessTemplateID = function (formData) {
  let url = `${api.messTemp.getTempId}access_token=${this.access_token}`
  let options = {method: 'GET', url, body: formData, json: true}
  return httpRequest(options, 'getMessTemplateID')
}
// 消息模版  获取模版列表
Wechat.prototype.fetchMessTempList = function () {
  let url = `${api.messTemp.fetchTempList}access_token=${this.access_token}`
  let options = {method: 'GET', url, json: true}
  return httpRequest(options, 'fetchMessTempList')
}
// 消息模版  删除模版
Wechat.prototype.delMessTemp = function (postData) {
  let url = `${api.messTemp.delMessTemp}access_token=${this.access_token}`
  let options = {method: 'GET', url, body: postData, json: true}
  return httpRequest(options, 'delMessTemp')
}
// 消息模版  发送模版信息
Wechat.prototype.sendMessTemp = function (userID, templateId, postData, detail_url) {
  let url = `${api.messTemp.sendTempMess}access_token=${this.access_token}`
  let form =  { "touser": userID, "template_id": templateId, "data": postData, ...(detail_url ? { url: detail_url } : {}) }
  let options = {method: 'POST', url, body: form, json: true}
  return httpRequest(options, 'sendMessTemp')
}
// 获取OpenId
Wechat.prototype.getOpenId = function (code) {
  let url = `${api.user.getOpenId}appid=${this.appID}&secret=${this.appSecret}&code=${code}&grant_type=authorization_code`
  let options = {url}
  return httpRequest(options, 'getOpenId')
}
module.exports = Wechat