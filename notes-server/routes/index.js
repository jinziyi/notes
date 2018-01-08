/**
 * Created by cjy on 16/11/23.
 */

const router = require('koa-router')();
const user_router = require('./users');

router.use('/users', user_router.routes(), user_router.allowedMethods());

module.exports = router;