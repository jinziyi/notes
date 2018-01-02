/**
 * Created by cjy on 16/11/23.
 */
import {createReducer} from '../utils';

//action
export const LOGIN = 'LOGIN';

export const login = (data) => dispatch => dispatch({
	type: LOGIN,
	data,
})

//reducer
const initialState = [
	{
		title: '登陆',
		count: 0,
		groupId: 1,
	},
	{
		title: '邮箱',
		count: 0,
		groupId: 1,
	},
	{
		title: '钱包',
		count: 0,
		groupId: 1,
	},
	{
		title: '账户',
		count: 0,
		groupId: 1,
	},
	{
		title: '记事本',
		count: 0,
		groupId: 1,
	},
	{
		title: '联系人',
		count: 0,
		groupId: 1,
	},
	{
		title: '其他',
		count: 0,
		groupId: 1,
	},
]

export const reducers = {
	[LOGIN]: login => true,
}

export default createReducer(initialState, reducers);