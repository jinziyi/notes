/**
 * Created by cjy on 16/11/23.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader'
import App from './App';

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('react-root')
	)
}


render(App)

if (module.hot) {
	module.hot.accept();
}