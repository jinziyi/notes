/**
 * Created by cjy on 16/11/23.
 */
import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import reducers from './reducers'

const history = createHistory();
const middleware = routerMiddleware(history)

export const store = createStore(
	combineReducers({
		...reducers,
		router: routerReducer
	}),
	composeWithDevTools(applyMiddleware(middleware, thunk, store => next => action => console.log(store.getState()) || next(action))),
)

export default (Component) => {
	return class extends React.Component {
		render() {
			return (
				<Provider store={store}>
					<ConnectedRouter history={history}>
						<Component/>
					</ConnectedRouter>
				</Provider>
			)
		}
	}
}