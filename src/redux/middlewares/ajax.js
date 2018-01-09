/**
 * Created by cjy on 16/11/23.
 */

export default ({dispatch, getState}) => {
	return next => action => {
		const {
			types,
			callAPI,
			fns = [() => true, () => {
			}, () => {
			}],   //fns可以不传
			payload = {}
		} = action;

		if (!types) {
			return next(action)
		}

		if (
			!Array.isArray(types) ||
			types.length !== 3 || !types.every(type => typeof type === 'string')
		) {
			throw new Error('Expected an array of three string types.')
		}

		if (typeof callAPI !== 'function') {
			throw new Error('Expected callAPI to be a function.')
		}

		const [requestType, successType, failureType] = types;
		const [requestFn, successFn, failureFn] = fns;

		if (!requestFn(getState())) {
			return
		}

		dispatch(Object.assign({}, payload, {
			type: requestType,
			data: {
				isFetching: true
			}
		}));

		return callAPI().then(res => res.json()).then(
			res => {
				dispatch(Object.assign({}, payload, {
					type: successType,
					data: {
						res,
						isFetching: false,
						success: true,
					}
				}));
				successFn(res);
			},
			err => {
				dispatch(Object.assign({}, payload, {
					type: failureType,
					data: {
						isFetching: false,
						success: false,
						err,
					}
				}));
				failureFn(err)
			}
		)
	}
};