/**
 * Created by cjy on 16/11/23.
 */

export const setCookie = (c_name, value, domain, expires,) => {
	let exdate = new Date();
	exdate = new Date(exdate.getTime() + expires);
	document.cookie = c_name + "=" + escape(value)
		+ (expires ? ";expires=" + exdate.toGMTString() : "")
		+ (domain ? ';domain=' + domain : '')
		+ ";path=/";
};

export const getCookie = (c_name) => {
	if (document.cookie.length > 0) {
		let c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			let c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) {
				c_end = document.cookie.length
			}
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return "";
};

export const delCookie = (c_name) => {
	const exp = new Date();
	exp.setTime(exp.getTime() - 1);
	const cval = getCookie(name);
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}