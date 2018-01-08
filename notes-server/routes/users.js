/**
 * Created by cjy on 16/11/23.
 */

const router = require('koa-router')({prefix: '/user'});
const user_controller = require('../app/controllers/user_controller');

router.post('/login', user_controller.loginUser);
router.post('/register', user_controller.registerUser);

module.exports = router;