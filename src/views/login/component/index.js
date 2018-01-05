/**
 * Created by cjy on 16/11/23.
 */
import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import routes from 'constants/routes';
import './style.scss';

export default class Login extends Component {
	state = {
		password: '',
		account: '',
	}

	render() {
		const {isLogin, login, toast} = this.props;
		const {password, account} = this.state;
		if (isLogin === true) {
			return <Redirect to={'/'}/>
		}
		return (
			<div className="v-login-root">
				<div className="info-box">
					<input type="text" value={account}
						   maxLength={16}
						   onChange={e => this.setState({account: e.target.value})} placeholder="请输入账号"/>
					<input type="password" value={password}
						   maxLength={16}
						   onChange={e => this.setState({password: e.target.value})} placeholder="请输入密码"/>
					<Link to={routes.register} className="primary to-register">注册账号</Link>
				</div>
				<div className="button-box">
					<div onClick={e => login({
						password, cb: isLogin => !isLogin ?
							toast({text: '密码错误', toastType: 'error'}) : ''
					})} className="btn">登陆
					</div>
				</div>
			</div>
		)
	}
}