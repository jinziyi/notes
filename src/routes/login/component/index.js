/**
 * Created by cjy on 16/11/23.
 */
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Login extends Component {
	render() {
		const {isLogin, login} = this.props;
		if (isLogin === true) {
			return <Redirect to={'/'}/>
		}
		return (
			<div onClick={login} className="center">
				登陆
			</div>
		)
	}
}