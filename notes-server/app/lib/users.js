/**
 * Created by cjy on 16/11/23.
 */
const {query} = require('./index');

const addUser = (value) => {
	const sql = 'insert into users (username, password) values(?, ?)';
	return query(sql, value);
}

const getUser = (name) => {
	const sql = `select * from users where username='${name}'`;
	return query(sql);
}

module.exports = {
	addUser,
	getUser,
}