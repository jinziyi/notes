/**
 * Created by cjy on 16/11/23.
 */

const fs = require('fs');
const Koa = require('koa');
const compress = require('koa-compress')
const app = new Koa();
const path = require('path');
const serve = require('koa-static');
const Router = require('koa-router');
const router = new Router();
const distPath = '../dist/'

const main = serve(path.join(__dirname, distPath), {maxage: 7 * 24 * 60 * 60});

router.get('*', async (ctx, next) => {
	ctx.response.type = 'html';
	ctx.response.body = fs.createReadStream(path.join(__dirname, distPath + 'index.html'));
})

app.use(main);
app.use(router.routes());
app.use(compress());
app.listen(3000);
console.log('app is runing at http://localhost:3000')