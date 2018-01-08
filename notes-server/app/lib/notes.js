/**
 * Created by cjy on 16/11/23.
 */
const {query} = require('./index');

const addNote = (value) => {
	const sql = 'insert into notes (name, password, desc, uid) values(?, ?, ?, ?)';
	return query(sql, value);
}

const getNoteById = (id) => {
	const sql = `select * from notes where id=${id}`;
	return query(sql);
}

const getNotes = (uid) => {
	const sql = `select * from notes where uid=${uid}`;
	return query(sql);
}

const deleteNote = (id) => {
	const sql = `delete from notes where id=${id}`;
	return query(sql);
}

const updateNote = (value) => {
	const sql = `update notes set ${Object.keys(value).map(key => key + '=' + value[key]).join(', ')}`;
	return query(sql);
}

const getNoteByFavour = (uid) => {
	const sql = `select * from notes where favour=1 and uid=${uid}`;
	return query(sql);
}

const updateFavour = (id, favour) => {
	const sql = `update notes set favour=${favour} where id=${id}`;
	return query(sql);
}


module.exports = {
	addUser,
	getUser,
}