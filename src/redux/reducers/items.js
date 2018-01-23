/**
 * Created by cjy on 16/11/23.
 */
import {createReducer, createApiActions} from '../utils';
import fetch from 'utils/fetch';

//action
export const createItemActions = createApiActions('ITEM', 'CREATE');
export const updateItemActions = createApiActions('ITEM', 'UPDATE');
export const deleteItemActions = createApiActions('ITEM', 'DELETE');
export const getItemActions = createApiActions('ITEM', 'GET');

export const updateItem = (params, cb) => ({
	types: [updateItemActions.request, updateItemActions.success, updateItemActions.error],
	callAPI: () => {
		return fetch('/api/items/update', params)
	},
	fns: [e => true, cb]
})

export const createItem = (params, cb) => ({
	types: [createItemActions.request, createItemActions.success, createItemActions.error],
	callAPI: () => {
		return fetch('/api/items/create', params)
	},
	fns: [e => true, cb]
})

export const deleteItem = (id, cb) => ({
	types: [deleteItemActions.request, deleteItemActions.success, deleteItemActions.error],
	callAPI: () => {
		return fetch('/api/items/delete', {id})
	},
	fns: [e => true, cb]
})

export const getItem = (cb) => ({
	types: [getItemActions.request, getItemActions.success, getItemActions.error],
	callAPI: () => {
		return fetch('/api/items/get', {}, {method: 'GET'})
	},
	fns: [e => true, cb]
})

//reducer
const initialState = []

export const reducers = {
	[getItemActions.success]: (state, {data}) => {
		if (data.res.code == 0) {
			return data.res.data.items
		}
		return state;
	},
	[updateItemActions.success]: (state, {data}) => {
		if (data.res.code == 0) {
			const result = data.res.data;
			return state.map(item => ({
				...item,
				...(item.id == result.item.id ? result.item : {}),
			}))
		}
		return state;
	},
	[deleteItemActions.success]: (state, {data}) => {
		if (data.res.code == 0) {
			return state.filter(item => item.id != data.res.data.id)
		}
		return state;
	},
	[createItemActions.success]: (state, {data}) => {
		if (data.res.code == 0) {
			return [...state, data.res.data.item]
		}
		return state;
	},
}

export default createReducer(initialState, reducers);