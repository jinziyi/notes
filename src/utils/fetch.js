/**
 * Created by cjy on 16/11/23.
 */

const defaultSuccess = console.log;

const defaultError = console.error;

const defaultFail = console.error;

import {getCookie} from './cookie';

export default (api, params = {}, success = defaultSuccess, fail = defaultFail, error = defaultError, method = 'POST') => {
	let data = Object.keys(params).map((item) => [item, params[item]].join('=')).join('&')
	let xhr = new XMLHttpRequest();
	xhr.open(method, api, true);
	xhr.setRequestHeader('Accept', 'application/json');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.send(data);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			let res;
			try {
				res = JSON.parse(xhr.responseText);
			} catch (err) {
				error(err)
				return;
			}
			if (res.data && res.data.bindCardUrl) {
				window.location.replace(res.data.bindCardUrl);
			} else {
				if (res.code == '100000') {
					success(res);
					localStorage.token = getCookie('token');
					return;
				}
				if (res.code == '200000') {
					// setTimeout(e => {
					window.location.replace(res.data.redirect_url);
					// }, 0);
					// fail(res);
					return;
				}
				if (res.code == 900000) {
					fail(res);
					window.location.replace(window.location.origin + '/error?msg=' + res.msg);
					return;
				}
				fail(res);
			}
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			error({msg: '服务器错误'})
		}
	};
	xhr.onerror = err => {
		error(err)
	}
}