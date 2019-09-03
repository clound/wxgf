const Router = require('koa-router')
const router = new Router()
const path = require('path')
const utils = require('../libs/utils')
const filePath = path.join(__dirname, '../www/index.html')


router.get('/', async (ctx, next) => {
  let content = await utils.readFileAsync(filePath)
  ctx.type = 'text/html'
  ctx.body = content
  next()
})

module.exports = router.routes()