const rp = require('request-promise')
function httpRequest(options, msg) {
  return new Promise(function (resolve, reject) {
    rp(options)
      .then(function (response) {
        var _data = response
        if (_data) {
          resolve(_data)
        } else {
          throw new Error(msg + '  error')
        }
      })
      .catch(function (err) {
        reject(err)
      })
  })
}
module.exports = httpRequest