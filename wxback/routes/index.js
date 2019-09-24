const Router = require('koa-router')
const router = new Router()

router.use('/auth', require('./auth'));
router.use('/home', require('./home'));
router.use('/authentication', require('./authentication'));
router.use('/sendmsg', require('./sendmsg'));
router.use('/signup', require('./signup'));
router.use('/search', require('./search'));
router.use('/detail', require('./detail'));
router.use('/about', require('./about'));

module.exports = router