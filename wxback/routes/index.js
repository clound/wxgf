const Router = require('koa-router')
const router = new Router()

router.use('/home', require('./home'));
router.use('/signup', require('./signup'));
router.use('/authentication', require('./authentication'));
router.use('/code', require('./code'));

module.exports = router