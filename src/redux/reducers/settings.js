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
		title: '修改密码',
		route: 'changePassword',
	},
]

export const reducers = {
	[LOGIN]: login => true,
}

export default createReducer(initialState, reducers);