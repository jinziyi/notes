/**
 * Created by cjy on 16/11/23.
 */
const assert = require('assert');

describe('Array', () => {
	describe('#indexOf', () => {
		it('should return -1 when the value is not present', () => {
			assert.equal(-1, [1, 2, 3].indexOf(4));
		})
		it('length', function () {
			assert.equal(3, [1, 2, 3].length);
		})
	})
})