/**
 * Created by cjy on 16/11/23.
 */
import {connect} from 'react-redux';
import {createReducer} from '../utils';

//action
export const TOAST_SHOW = 'TOAST_SHOW';
export const TOAST_HIDE = 'TOAST_HIDE';

export const show = (data) => dispatch => dispatch({
	type: TOAST_SHOW,
	data,
})

export const hide = (data) => dispatch => dispatch({
	type: TOAST_HIDE,
	data,
})


//reducer
const initialState = {
	isShow: false,
	toastType: 'success',
	text: '操作成功',
	autoClose: 1500,
};

export const reducers = {
	[TOAST_SHOW]: (toast, {data}) => ({...toast, toastType: 'success', ...data, isShow: true,}),
	[TOAST_HIDE]: (toast) => ({...toast, isShow: false,}),
}

export default createReducer(initialState, reducers);

export const connectToast = (Component) => {
	return connect(state => {
		const {toast} = state;
		return toast;
	}, {
		hide,
	})(Component)
}