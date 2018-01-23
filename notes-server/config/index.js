/**
 * Created by cjy on 16/11/23.
 */

const development_env = require('./development');
const production_env = require('./production');
const test_env = require('./test');

//根据不同的NODE_ENV，输出不同的配置对象，默认输出development的配置对象
console.log(process.env.NODE_ENV);
module.exports = {
    development: development_env,
	production: production_env,
    test: test_env
}[process.env.NODE_ENV || 'productoin'];
