/**
 * Created by cjy on 16/11/23.
 */
export default (url, params = {}, config = {}) => {
	let fetchConfig = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			...(config.headers || {})
		},
		credentials: 'include',
		mode: 'cors',
		...config
	}
	if (fetchConfig.method === 'POST' && Object.keys(params).length) {
		fetchConfig.body = JSON.stringify(params)
	}
	return fetch(url, fetchConfig)
}