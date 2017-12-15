/**
 * Created by cjy on 16/11/23.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader'
import App from './route/App';
import './style/index.scss';

ReactDOM.render(<AppContainer><App/></AppContainer>, document.getElementById('react-root'));

if (module.hot) {
	module.hot.accept();
}