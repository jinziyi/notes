/**
 * Created by cjy on 16/11/23.
 */

const router = require('koa-router')();
const user_controller = require('../app/controllers/item_controller');

router.get('/get', user_controller.getItem);
router.post('/delete', user_controller.deleteItem);
router.post('/create', user_controller.createItem);
router.post('/update', user_controller.updateItem);

module.exports = router;