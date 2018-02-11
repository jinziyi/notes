/**
 * Created by cjy on 16/11/23.
 */

import {LOADING_SHOW, LOADING_HIDE} from '../reducers/loading';

export default ({dispatch, getState}) => {
	const loadingState = {};
	return next => action => {
		const {
			types,
			callAPI,
			showLoading = true,
			fns = [],   //fns可以不传
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
		const [requestFn = e => true, successFn = e => e, failureFn = e => e] = fns;

		if (!requestFn(getState())) {
			return
		}

		dispatch(Object.assign({}, payload, {
			type: requestType,
			data: {
				isFetching: true
			}
		}));
		const hash = types.join('|');
		if (showLoading) {
			loadingState[hash] = true;
			setTimeout(e => {
				if (loadingState[hash]) {
					dispatch({type: LOADING_SHOW})
				}
			}, 1000)
		}

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
				if (showLoading) {
					loadingState[hash] = false;
					dispatch({type: LOADING_HIDE})
				}
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
				if (showLoading) {
					loadingState[hash] = false;
					dispatch({type: LOADING_HIDE})
				}
				showLoading && dispatch({type: LOADING_HIDE})
				failureFn(err)
			}
		)
	}
};