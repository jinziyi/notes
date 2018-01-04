/**
 * Created by cjy on 16/11/23.
 */
import {createReducer} from '../utils';

//action
export const ITEM_UPDATE = 'ITEM_UPDATE';
export const ITEM_CREATE = 'ITEM_CREATE';
export const ITEM_DELETE = 'ITEM_DELETE';

export const updateItem = (id, data) => dispatch => dispatch({
	type: ITEM_UPDATE,
	data: {id, ...data},
})

export const createItem = (data) => dispatch => dispatch({
	type: ITEM_CREATE,
	data,
})

export const deleteItem = (id) => dispatch => dispatch({
	type: ITEM_DELETE,
	data: {id},
})

//reducer
const initialState = [
	{
		id: '000',
		title: 'QQ',
		desc: '996757810',
		groupId: 1,
	},
	{
		id: '001',
		title: 'QQ邮箱',
		desc: '996757810',
		groupId: 2,
	},
]

export const reducers = {
	[ITEM_UPDATE]: (items, {data}) => items.map(item => {
		if (item.id !== data.id) {
			return item
		}
		return {
			...item,
			...data,
		}
	}),
	[ITEM_CREATE]: (items, {data}) => [...items, {...data, id: String(items.length)}],
	[ITEM_DELETE]: (items, {data}) => items.filter(item => item.id !== data.id),
}

export default createReducer(initialState, reducers);