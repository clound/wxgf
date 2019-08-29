'use strict'
const fs = require('fs')
const xml2js = require('xml2js')
//异步读取文件
exports.readFileAsync = function (fpath, encoding = 'utf8') {
  return new Promise(function (resolve, reject) {
      fs.readFile(fpath, encoding, function (err, data) {
          if(err) reject(err)
          else resolve(data)
      })  
  })
}

//异步写入文件
exports.writeFileAsync = function (fpath, content) {
  return new Promise(function (resolve, reject) {
      fs.writeFile(fpath, content, function (err) {
          if(err) reject(err)
          else resolve(content)
      })
  })
}

exports.parseXMLAsync = function(xml) {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, { trim: true }, function(err, content) {
      if (err) reject(err)
      else resolve(content)
    })
  })
}

function formatMessage(result) {
  let message = {}
  if (typeof result === 'object') {
    let keys = Object.keys(result)
    for (let i = 0;i < keys.length; i++) {
      let item = result[keys[i]]
      let key = keys[i]
      if (!(item instanceof Array) || item.length === 0) continue
      if (item.length === 1) {
        let val = item[0]
        if (typeof val === 'object') {
          message[key] = formatMessage(val)
        } else {
          message[key] = (val || '').trim()
        }
      } else {
        message[key] = []
        for(let j = 0, k = item.length; j < k; j++) {
          message[key].push(formatMessage(item[j]))
        }
      }
    }
  }
  return message
}
exports.formatMessage = formatMessage