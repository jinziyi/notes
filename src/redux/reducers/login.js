/**
 * Created by cjy on 16/11/23.
 */
import {createReducer, createApiActions} from '../utils';
import fetch from 'utils/fetch';

//action
export const getUserInfoActions = createApiActions('USER_INFO', 'GET');
export const loginActions = createApiActions('LOGIN');
export const logoutActions = createApiActions('LOGOUT');

export const login = (username, password, cb = e => e) => ({
	types: [loginActions.request, loginActions.success, loginActions.error],
	callAPI: () => {
		return fetch('/api/users/login', {username, password})
	},
	fns: [e => true, cb]
})

export const getUserInfo = (cb = e => e) => ({
	types: [getUserInfoActions.request, getUserInfoActions.success, getUserInfoActions.error],
	callAPI: () => {
		return fetch('/api/users/get', {}, {method: 'GET'})
	},
	fns: [e => true, cb, e => e]
})


export const logout = (data) => dispatch => dispatch({
	type: LOGOUT,
	data,
})


//reducer
const initialState = {
	isLogin: false,
};

export const reducers = {
	[loginActions.success]: (state, {data}) => {
		if (data.res.code == 0) {
			return {
				isLogin: true,
				username: data.res.username
			}
		}
		return state;
	},
	[getUserInfoActions.success]: (state, {data}) => {
		if (data.res.code == 0) {
			return {
				isLogin: true,
				username: data.res.username
			}
		}
		return state;
	},
}

export default createReducer(initialState, reducers);