/**
 * Created by cjy on 16/11/23.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './app';
import './style/index.scss';
import hijack from './utils/anti_hijacking';
import formatFont from './utils/formatFont';

const rootId = 'react-root';
ReactDOM.render(<AppContainer warnings={false}><App/></AppContainer>, document.getElementById(rootId), e => {
	if (process.env.NODE_ENV === 'production') {
		//hack掉非本项目的代码，用户移除运营商劫持的代码
		hijack(rootId, document.body.children.length, [window.location.origin, 'chrome-extension:']);
	}
	formatFont(750);	//移动端项目下与psd映射初始化rem值
});

if (module.hot) {
	module.hot.accept();
}