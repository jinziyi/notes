/**
 * Created by cjy on 16/11/23.
 */
const {query} = require('./index');

const createItem = (value) => {
	const sql = 'insert into notes (title, name, password, description, uid) values(?, ?, ?, ?, ?)';
	return query(sql, value);
}

const getItem = (uid) => {
	const sql = `select * from notes where uid="${uid}"`;
	return query(sql);
}

const deleteItem = (id, uid) => {
	const sql = `delete from notes where id="${id}" and uid="${uid}"`;
	return query(sql);
}

const updateItem = (value, uid) => {
	const sql = `update notes set ${Object.keys(value).filter(key => key !== 'id').map(key => key + '=' + '"' + value[key] + '"').join(', ')} 
	where id="${value.id}" and uid="${uid}"`;
	return query(sql);
}

module.exports = {
	getItem,
	createItem,
	deleteItem,
	updateItem,
}