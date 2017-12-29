/**
 * Created by cjy on 16/11/23.
 */
export default (arr = []) => {
	if (!arr.length) {
		return false
	}
	let i = 0;
	const cache = (imgs, cb = e => e) => {
		let done = imgs.map(e => false);
		imgs.forEach((img, i) => {
			const image = new Image();
			image.src = img;
			if (image.complete) {
				done[i] = true;
				if (!done.includes(false)) {
					cb()
				}
			} else {
				image.onload = e => {
					done[i] = true;
					if (!done.includes(false)) {
						cb()
					}
				}
			}
		})
	}
	const selfCache = e => {
		if (i >= arr.length) {
			return false;
		}
		cache(arr[i++], selfCache)
	}
	selfCache(i);
}