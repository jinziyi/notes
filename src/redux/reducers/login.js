/**
 * Created by cjy on 16/11/23.
 */
import {createReducer} from '../utils';

//action
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = ({password, cb = e => e}) => dispatch => {
	if (password === 'cjy123') {
		cb(true)
		return dispatch({type: LOGIN})
	}
	cb(false)
	dispatch({type: LOGOUT})
}

export const logout = (data) => dispatch => dispatch({
	type: LOGOUT,
	data,
})


//reducer
const initialState = false;

export const reducers = {
	[LOGIN]: login => true,
	[LOGOUT]: login => false,
}

export default createReducer(initialState, reducers);