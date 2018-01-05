/**
 * Created by cjy on 16/11/23.
 */
import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import routes from 'constants/routes';
import './style.scss';

export default class Register extends Component {
	state = {
		password: '',
		password1: '',
		account: '',
	}

	render() {
		const {isLogin, login, toast} = this.props;
		const {password, password1, account} = this.state;
		if (isLogin === true) {
			return <Redirect to={'/'}/>
		}
		return (
			<div className="v-register-root">
				<div>
					<i className="logo fa fa-snowflake-o"/>
				</div>
				<div className="info-box">
					<input type="text" value={account}
						   maxLength={16}
						   onChange={e => this.setState({account: e.target.value})} placeholder="请输入账号"/>
					<input type="password" value={password}
						   maxLength={16}
						   onChange={e => this.setState({password: e.target.value})} placeholder="请输入密码"/>
					<input type="password" value={password1}
						   maxLength={16}
						   onChange={e => this.setState({password1: e.target.value})} placeholder="请确认密码"/>
					<Link to={routes.login} className="primary to-login">已有账号？去登陆</Link>
				</div>
				<div className="button-box">
					<div onClick={::this.register} className="btn">注册并登陆
					</div>
				</div>
			</div>
		)
	}

	register() {
		const {toast, register} = this.props;
		const {password, password1, account} = this.state;
		if (!account) {
			return toast({text: '请输入账号', toastType: 'error'});
		}
		if (!password || password !== password1) {
			return toast({text: '两次密码不一致', toastType: 'error'});
		}
		register({password1, password, account})
	}
}