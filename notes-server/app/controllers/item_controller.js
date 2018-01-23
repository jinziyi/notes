/**
 * Created by cjy on 16/11/23.
 */
const md5 = require('md5');
const {getItem, createItem, updateItem, deleteItem} = require('../lib/items');

exports.getItem = async (ctx, next) => {
	//如果id != 1抛出API 异常
	if (ctx.session && ctx.session.username) {
		const uid = ctx.session.id;
		return await getItem(uid).then(result => {
			const res = JSON.parse(JSON.stringify(result))
			ctx.body = {
				code: 0,
				message: '操作成功',
				data: {
					items: res.map(item => ({
						id: item.id,
						title: item.title,
						name: item.name,
						password: item.password,
						description: item.description,
						favour: item.favour
					})),
				}
			}
		}).catch(err => {
			ctx.body = {
				code: 1000,
				message: err
			}
		});
	} else {
		return ctx.body = {
			code: 1000,
			message: '未登陆',
		}
	}
}

exports.createItem = async (ctx, next) => {
	if (ctx.session && ctx.session.username) {
		const uid = ctx.session.id;
		const {title, name, password = '', description = ''} = ctx.request.body;
		if(!title || !name){
			return ctx.body = {
				code: 1000,
				message: '参数错误'
			}
		}
		return await createItem([title, name, password, description, uid]).then(result => {
			ctx.body = {
				code: 0,
				message: '操作成功',
				data: {
					item: {
						id: result.insertId,
						title,
						name,
						password,
						description
					}
				}
			}
		}).catch(err => {
			ctx.body = {
				code: 1000,
				message: err
			}
		});
	} else {
		return ctx.body = {
			code: 1000,
			message: '未登陆',
		}
	}
}

exports.deleteItem = async (ctx, next) => {
	if (ctx.session && ctx.session.username) {
		const uid = ctx.session.id;
		const {id} = ctx.request.body;
		return await deleteItem(id, uid).then(result => {
			ctx.body = {
				code: 0,
				message: '操作成功',
				data: {
					id
				}
			}
		}).catch(err => {
			ctx.body = {
				code: 1000,
				message: err
			}
		});
	} else {
		return ctx.body = {
			code: 1000,
			message: '未登陆',
		}
	}
}

exports.updateItem = async (ctx, next) => {
	if (ctx.session && ctx.session.username) {
		const uid = ctx.session.id;
		const params = ctx.request.body;
		return await updateItem(params, uid).then(result => {
			const res = JSON.parse(JSON.stringify(result))
			ctx.body = {
				code: 0,
				message: '操作成功',
				data: {
					item: params,
				}
			}
		}).catch(err => {
			ctx.body = {
				code: 1000,
				message: err
			}
		});
	} else {
		return ctx.body = {
			code: 1000,
			message: '未登陆',
		}
	}
}