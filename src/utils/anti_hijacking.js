/**
 * Created by cjy on 16/11/23.
 */

export default (rootId, domLen = 2, jsHosts = [window.location.origin]) => {
	const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
	const target = document.body;
	const observer = new MutationObserver(function (mutations) {
		if (target.children.length > domLen) {
			const children = [...document.body.children];
			children.filter(child => {
				if (child.id === rootId) {
					return false;
				}
				if (child.src) {
					return jsHosts.filter(host => child.src.indexOf(host) < 0)
				}
				return true
			}).forEach(e => e.remove());
		}
	});
	const config = {childList: true,}
	observer.observe(target, config);
	// observer.disconnect();
}
