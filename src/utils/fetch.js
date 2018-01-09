/**
 * Created by cjy on 16/11/23.
 */
export default (url, params, config = {}) => {
	return fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				...(config.headers || {})
			},
			mode: 'cors',
			body: JSON.stringify(params),
			...config
		}
	)
}