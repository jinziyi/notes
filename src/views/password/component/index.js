/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {getRoute} from 'constants/routes';
import './style.scss';
import routes from 'constants/routes';
import PropItem from 'components/PropItem';
import requireLogin from 'containers/requireLogin';
import password from "../../../redux/reducers/password"

const oldPassword = 'oldPassword';
const newPassword = 'newPassword';
const againPassword = 'againPassword';

@requireLogin
export default class Password extends PureComponent {

	state = {
		form: {
			[oldPassword]: '',
			[newPassword]: '',
			[againPassword]: '',
		}
	}

	properties = [
		{
			key: oldPassword,
			label: '旧密码',
			placeholder: '请输入当前密码',
		},
		{
			key: newPassword,
			label: '新密码',
			placeholder: '请输入新密码',
		},
		{
			key: againPassword,
			label: '确认密码',
			placeholder: '请确认密码',
		},
	]

	render() {
		const {properties, props, state} = this;
		const {form} = state;
		const {history} = props;
		const updateValue = (key, value) => this.setState(({form}) => ({form: {...form, [key]: value}}));
		return (
			<div className="v-password-root">
				<div className="form-box">
					{properties.map(prp => (
						<PropItem {...prp} value={form[prp.key]}
								  type={'password'}
								  onChange={e => updateValue(prp.key, e.target.value)}/>
					))}
				</div>
				<div className="button-box">
					<div onClick={::this.actionHandler}
						 className="btn">
						保存
					</div>
				</div>
				<div onClick={history.goBack} className="tap-position">
					<i className="icon icon-reply primary"/>
				</div>
			</div>
		)
	}

	testForm(form) {
		return form[newPassword].trim() && Object.keys(form).every(e => !!e.trim()) && form[againPassword] === form[newPassword];
	}

	actionHandler() {
		const {showToast, history, updatePassword} = this.props;
		const {form} = this.state;
		if (!this.testForm(form)) {
			return showToast({text: `两次密码不一致！`, toastType: 'error'})
		}
		updatePassword(form, res => {
			if (res.code == 0) {
				showToast({text: '修改成功'});
				history.goBack();
			} else {
				return showToast({text: res.message || '密码修改失败', toastType: 'error'})
			}
		})
	}
}