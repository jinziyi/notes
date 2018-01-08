/**
 * Created by cjy on 16/11/23.
 */
const request = require('supertest');
const {expect} = require('chai');
const app = require('../app');

describe('user_api', () => {
	it('getUser', done => {
		request(app.listen())
			.get('/api/users/getUser?id=1')
			.set('Content-Type', 'application/json')
			.expect(200)
			.end((err, res) => {
				expect(res.body.data).to.be.an('object');
				done();
			})
	})
	it('registerUser', done => {
		const user = {
			username: 'cjy',
			age: 22,
		}
		request(app.listen())
			.post('/api/users/registerUser')
			.send(user)
			.set('Content-Type', 'application/json')
			.expect(200)
			.end((err, res) => {
				expect(res.body.code).to.be.equal(0);
				done();
			})
	})
})