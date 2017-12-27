/**
 * Created by cjy on 16/11/23.
 */

export default (rootId, domLen = 2, jsHost = window.location.origin) => {
	window.addEventListener('DOMNodeInserted', e => {
		if (document.body.children.length > domLen) {
			const children = [...document.body.children];
			children.filter(child => {
				if (child.id === rootId) {
					return false;
				}
				if (child.src) {
					return child.src.indexOf(jsHost) < 0
				}
				return true
			}).forEach(e => e.remove());
		}
	})
}
