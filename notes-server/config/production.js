/**
 * Created by cjy on 16/11/23.
 */

module.exports = {
    env: 'production', //环境名称
    port: 80,         //服务端口号
    mongodb_url: '',    //数据库地址
    redis_url: '',       //redis地址
    redis_port: '',      //redis端口号
	database: {
		host: 'localhost',
		port: '3306',
		username: 'root',
		password: 'cjy123',
		database: 'notes'
	}
};
