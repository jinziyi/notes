/**
 * Created by cjy on 16/11/23.
 */

const ApiErrorNames = require('./apiErrorNames');

class ApiError extends Error {

	//构造方法
	constructor(error_name, error_code, error_message) {
		super();

		const error_info = ApiErrorNames.getErrorInfo(error_name);

		this.name = error_name;
		this.code = error_info.code;
		this.message = error_info.message;
	}

}

module.exports = ApiError;
