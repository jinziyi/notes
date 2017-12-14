/**
 * Created by cjy on 16/11/23.
 */

const Koa = require('koa');
const compress = require('koa-compress')
const app = new Koa();
const path = require('path');
const serve = require('koa-static');

const main = serve(path.join(__dirname, '../dist/'));

app.use(compress());
app.use(main);
app.listen(3000);
console.log('app is runing at http://localhost:3000')