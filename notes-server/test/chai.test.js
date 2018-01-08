/**
 * Created by cjy on 16/11/23.
 */
const {expect} = require('chai');

describe('chai expect demo', () => {
	it('expect equal', function () {
		expect(1 + 1).to.equal(2);
		expect(1 + 1).not.equal(3);
	})
})