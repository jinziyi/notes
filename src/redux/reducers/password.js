/**
 * Created by cjy on 16/11/23.
 */
import {createReducer, createApiActions} from '../utils';
import fetch from 'utils/fetch';

//action
export const getPasswordActions = createApiActions('PASSWORD', 'GET');

export const updatePassword = (params, successFn) => ({
	types: [getPasswordActions.request, getPasswordActions.success, getPasswordActions.error],
	callAPI: () => {
		return fetch('/api/password/update', params)
	},
	fns: {successFn}
})

//reducer
const initialState = false

export const reducers = {
	[getPasswordActions.success]: (state, {data}) => data.res.code == 0,
}

export default createReducer(initialState, reducers);