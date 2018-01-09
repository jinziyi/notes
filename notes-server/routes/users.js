/**
 * Created by cjy on 16/11/23.
 */

const router = require('koa-router')();
const user_controller = require('../app/controllers/user_controller');

router.get('/get', user_controller.getUser);
router.post('/login', user_controller.loginUser);
router.post('/logout', user_controller.logoutUser);
router.post('/register', user_controller.registerUser);

module.exports = router;