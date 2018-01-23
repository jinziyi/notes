/**
 * Created by cjy on 16/11/23.
 */
const mysql = require('mysql');
const config = require('../../config/database');

const pool = mysql.createPool({
	host: config.host,
	user: config.username,
	password: config.password,
	database: config.database
});

const query = function (sql, values) {

	return new Promise((resolve, reject) => {
		pool.getConnection(function (err, connection) {
			if (err) {
				resolve(err)
			} else {
				connection.query(sql, values, (err, rows) => {
					if (err) {
						reject(err)
					} else {
						resolve(rows)
					}
					connection.release()
				})
			}
		})
	})
}


const users = `create table if not exists users(
 id INT NOT NULL AUTO_INCREMENT,
 username VARCHAR(100) NOT NULL UNIQUE,
 password VARCHAR(40) NOT NULL,
 create_time TIMESTAMP NOT NULL,
 PRIMARY KEY ( id )
)`

const notes = `create table if not exists notes(
 id INT NOT NULL AUTO_INCREMENT,
 title VARCHAR(100) NOT NULL,
 name VARCHAR(100) NOT NULL,
 password VARCHAR(40) NOT NULL,
 description VARCHAR(100) NOT NULL,
 favour INT NOT NULL DEFAULT 0,
 uid VARCHAR(40) NOT NULL,
 create_time TIMESTAMP NOT NULL,
 PRIMARY KEY ( id )
)`

const createTable = function( sql ) {
	return query( sql, [] )
}

createTable(users);
createTable(notes);

module.exports = {
	query
}
