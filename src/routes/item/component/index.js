/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {getRoute} from 'constants/routes';
import './style.scss';
import PropItem from 'components/PropItem';
import requireLogin from 'containers/requireLogin';

@requireLogin
export default class Item extends PureComponent {
	state = {
		showPassword: false,
	}
	properties = [
		{
			key: 'title',
			label: '标题',
			placeholder: '请输入标题',
		},
		{
			key: 'name',
			label: '名称',
			placeholder: '请输入名称',
		},
		{
			key: 'password',
			label: '密码',
			type: 'password',
			placeholder: '请输入密码',
		},
		{
			key: 'desc',
			label: '描述',
			placeholder: '请输入描述',
		},
	]

	render() {
		const {properties, props, state} = this;
		const {showPassword} = state;
		const {values = {}, match, history, changeValue} = props;
		const mainKeys = ['title', 'name']
		const main = properties.filter(prp => mainKeys.includes(prp.key));
		const remain = properties.filter(prp => !mainKeys.includes(prp.key));
		const updateValue = (key, value) => changeValue(match.params.itemId, key, value);
		return (
			<div className="v-item-root">
				<div className="main">
					<div className="prps">
						{main.map(prp => (
							<PropItem {...prp} value={values[prp.key]}
									  onChange={e => updateValue(prp.key, e.target.value)}/>
						))}
					</div>
					<div className="favour">
						<i onClick={e => updateValue('favour', !values.favour)}
						   className={`fa fa-heart${values['favour'] ? '' : '-o'}`}/>
					</div>
				</div>
				<div className="remain">
					{remain.map(prp => (
						<PropItem {...prp} value={values[prp.key]}
								  type={!showPassword && prp.key === 'password' ? 'password' : 'text'}
								  toggleView={e => this.setState({showPassword: !showPassword})}
								  showViewIcon={prp.key === 'password'}
								  onChange={e => updateValue(prp.key, e.target.value)}/>
					))}
				</div>
				<div onClick={history.goBack} className="tap-position">
					<i className="fa fa-reply primary"/>
				</div>
			</div>
		)
	}
}