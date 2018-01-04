/**
 * Created by cjy on 16/11/23.
 */
import {createReducer} from '../utils';

//action
export const UPDATE_ITEM = 'UPDATE_ITEM';

export const changeValue = (id, key, value) => dispatch => dispatch({
	type: UPDATE_ITEM,
	data: {id, key, value},
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
	[UPDATE_ITEM]: (items, {data}) => items.map(item => {
		if (item.id !== data.id) {
			return item
		}
		return {
			...item,
			[data.key]: data.value,
		}
	}),
}

export default createReducer(initialState, reducers);