/**
 * Created by cjy on 16/11/23.
 */

const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const {addUser, getUser} = require('../lib/users');

//获取用户
exports.loginUser = async (ctx, next) => {
	//如果id != 1抛出API 异常
	const {username, password} = ctx.params
	const userInfo = getUser([username, password]);
	console.log(userInfo)
}

//用户注册
exports.registerUser = async (ctx, next) => {
    console.log('registerUser', ctx.request.body);
}