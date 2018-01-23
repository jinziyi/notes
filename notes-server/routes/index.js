/**
 * Created by cjy on 16/11/23.
 */

const router = require('koa-router')();
const user_router = require('./users');
const item_router = require('./items');

router.use('/users', user_router.routes(), user_router.allowedMethods());
router.use('/items', item_router.routes(), item_router.allowedMethods());
module.exports = router;