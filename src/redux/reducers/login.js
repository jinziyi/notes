/**
 * Created by cjy on 16/11/23.
 */
import {createReducer, createApiActions} from '../utils';
import fetch from 'utils/fetch';

//action
export const getUserInfoActions = createApiActions('USER_INFO', 'GET');
export const loginActions = createApiActions('LOGIN');
export const logoutActions = createApiActions('LOGOUT');
export const registerActions = createApiActions('REGISTER');

export const login = (username, password, successFn) => ({
	types: [loginActions.request, loginActions.success, loginActions.error],
	callAPI: () => {
		return fetch('/api/users/login', {username, password})
	},
	fns: {successFn}
})

export const getUserInfo = () => ({
	types: [getUserInfoActions.request, getUserInfoActions.success, getUserInfoActions.error],
	callAPI: () => {
		return fetch('/api/users/get', {}, {method: 'GET'})
	},
})


export const logout = () => ({
	types: [logoutActions.request, logoutActions.success, logoutActions.error],
	callAPI: () => {
		return fetch('/api/users/logout')
	},
})

export const register = (params, successFn) => ({
	types: [registerActions.request, registerActions.success, registerActions.error],
	callAPI: () => {
		return fetch('/api/users/register', params)
	},
	fns: {successFn}
})


//reducer
const initialState = {
	isLogin: true,
};

export const reducers = {
	[registerActions.success]: (state, {data}) => {
		if (data.res.code == 0) {
			return {
				isLogin: true,
				username: data.res.data.username
			}
		}
		return state;
	},
	[loginActions.success]: (state, {data}) => {
		if (data.res.code == 0) {
			return {
				isLogin: true,
				username: data.res.data.username
			}
		}
		return state;
	},
	[getUserInfoActions.success]: (state, {data}) => {
		if (data.res.code == 0) {
			return {
				isLogin: true,
				username: data.res.data.username
			}
		}
		return {
			isLogin: false,
		};
	},
	[logoutActions.success]: (state, {data}) => {
		if (data.res.code == 0) {
			return {
				isLogin: false,
				username: null
			}
		}
		return state;
	},
}

export default createReducer(initialState, reducers);