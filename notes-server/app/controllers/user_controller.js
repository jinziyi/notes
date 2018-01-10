/**
 * Created by cjy on 16/11/23.
 */
const md5 = require('md5');
const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const {addUser, getUser} = require('../lib/users');

//获取用户
exports.getUser = async (ctx, next) => {
	//如果id != 1抛出API 异常
	if (ctx.session && ctx.session.username) {
		const username = ctx.session.username;
		return await getUser(username).then(result => {
			const res = JSON.parse(JSON.stringify(result))[0]
			ctx.body = {
				code: 0,
				message: '操作成功',
				data: {
					isLogin: true,
					username: res.username,
				}
			}
		}).catch(err => {
			ctx.body = {
				code: 1000,
				messge: err
			}
		});
	} else {
		return ctx.body = {
			code: 1000,
			message: '未登陆',
		}
	}
}

//获取用户
exports.loginUser = async (ctx, next) => {
	//如果id != 1抛出API 异常
	const {username, password} = ctx.request.body;
	await getUser(username).then(result => {
		const res = JSON.parse(JSON.stringify(result))[0]
		if (!res) {
			return ctx.body = {
				code: 1000,
				message: '用户不存在'
			}
		}
		if (res.password !== md5(password)) {
			return ctx.body = {
				code: 1000,
				message: '密码错误'
			}
		}
		ctx.session.username = res.username;
		ctx.session.id = res.id;
		ctx.body = {
			code: 0,
			message: '登陆成功'
		}
	}).catch(err => {
		ctx.body = {
			code: 1000,
			message: err
		}
	});
}

exports.logoutUser = async (ctx, next) => {
	//如果id != 1抛出API 异常
	ctx.session = null;
	return ctx.body = {
		code: 0,
		message: '退出成功'
	}
}

//用户注册
exports.registerUser = async (ctx, next) => {
	const {username, password, password1} = ctx.request.body;
	if (!username || !password1 || password1 !== password) {
		return ctx.body = {
			code: 1000,
			message: '参数错误'
		}
	}
	await getUser(username).then(async result => {
		if (result.length) {
			ctx.body = {
				code: 1001,
				message: '账户名已存在'
			}
			return
		}
		await addUser([username, md5(password)]).then(result => {
			const res = JSON.parse(JSON.stringify(result));
			ctx.session.username = username;
			ctx.session.id = res.insertId;
			ctx.body = {
				code: 0,
				message: '注册成功',
				data: {
					isLogin: true,
					username
				}
			}
		})
	}).catch(err => {
		console.log(err)
	})
}