/**
 * Created by cjy on 16/11/23.
 */
import {connect} from 'react-redux';
import {createReducer} from '../utils';

//action
export const LOADING_SHOW = Symbol('LOADING_SHOW');
export const LOADING_HIDE = Symbol('LOADING_HIDE');

export const show = (data) => dispatch => dispatch({
	type: LOADING_SHOW,
	data,
})

export const hide = (data) => dispatch => dispatch({
	type: LOADING_HIDE,
	data,
})


//reducer
const initialState = {
	isShow: false,
	toastType: 'loading',
	text: '加载中',
};

export const reducers = {
	[LOADING_SHOW]: (toast) => ({...toast, isShow: true,}),
	[LOADING_HIDE]: (toast) => ({...toast, isShow: false,}),
}

export default createReducer(initialState, reducers);

export const connectLoading = (Component) => {
	return connect(state => {
		const {loading} = state;
		return loading;
	}, {
		hide,
	})(Component)
}