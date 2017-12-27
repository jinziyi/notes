/**
 * Created by cjy on 16/11/23.
 */
const getValue = (v1, v2, v3, t) => 3 * v1 * t * (1 - t) * (1 - t) + 3 * v2 * t * t * (1 - t) + v3 * t * t * t;

export default (x1, y1, x2, y2) => t => {
	const x3 = 1;
	const y3 = 1;
	return {
		x: getValue(x1, x2, x3, t),
		y: getValue(y1, y2, y3, t),
	}
}