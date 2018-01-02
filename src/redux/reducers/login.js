/**
 * Created by cjy on 16/11/23.
 */
import {createReducer} from '../utils';

//action
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (data) => dispatch => dispatch({
	type: LOGIN,
	data,
})

export const logout = (data) => dispatch => dispatch({
	type: LOGOUT,
	data,
})


//reducer
const initialState = true;

export const reducers = {
	[LOGIN]: login => true,
	[LOGOUT]: login => false,
}

export default createReducer(initialState, reducers);