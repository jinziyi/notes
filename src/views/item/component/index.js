/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {getRoute} from 'constants/routes';
import './style.scss';
import routes from 'constants/routes';
import PropItem from 'components/PropItem';
import requireLogin from 'containers/requireLogin';

@requireLogin
export default class Item extends PureComponent {

	static defaultProps = {
		values: {}
	}

	constructor(props) {
		super(props);
		this.actionHandler = ::this.actionHandler;
		this.state = {
			showPassword: false,
			form: props.values,
		}
	}

	mainKeys = ['title', 'name']

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
		const {properties, props, state, mainKeys} = this;
		const {showPassword, form} = state;
		const {match, history, values, updateItem, createItem, deleteItem, showToast, hideToast} = props;
		const main = properties.filter(prp => mainKeys.includes(prp.key));
		const remain = properties.filter(prp => !mainKeys.includes(prp.key));
		const updateValue = (key, value) => this.setState(({form}) => ({form: {...form, [key]: value}}));
		const itemId = match.params.itemId;
		const isCreate = match.url === routes.create;
		const submitChange = (data) => updateItem(itemId, data);
		return (
			<div className="v-item-root">
				<div className="main">
					<div className="prps">
						{main.map(prp => (
							<PropItem {...prp} value={form[prp.key]}
									  onChange={e => updateValue(prp.key, e.target.value)}/>
						))}
					</div>
					{
						isCreate ? null : <div className="favour">
							<i onClick={e => submitChange({favour: !values.favour}) && !values.favour && showToast({text: '收藏成功'})}
							   className={`fa fa-heart${values['favour'] ? '' : '-o'}`}/>
						</div>
					}
				</div>
				<div className="remain">
					{remain.map(prp => (
						<PropItem {...prp} value={form[prp.key]}
								  type={!showPassword && prp.key === 'password' ? 'password' : 'text'}
								  toggleView={e => this.setState({showPassword: !showPassword})}
								  showViewIcon={prp.key === 'password'}
								  onChange={e => updateValue(prp.key, e.target.value)}/>
					))}
				</div>
				<div className="button-box">
					{isCreate ?
						<div onClick={e => this.actionHandler(e => createItem(form), '创建成功', true)} className="btn">
							新增
						</div> : [
							<div onClick={e => this.actionHandler(e => submitChange(form), '修改成功', true)}
								 className="btn">
								保存
							</div>,
							<div onClick={e => window.confirm('确定删除吗？') && this.actionHandler(e => deleteItem(itemId), '删除成功')}
								 className="btn danger">
								删除
							</div>,]
					}
				</div>
				<div onClick={history.goBack} className="tap-position">
					<i className="fa fa-reply primary"/>
				</div>
			</div>
		)
	}

	testForm(form) {
		return this.mainKeys.every(key => form[key] && form[key].trim())
	}

	actionHandler(act, toastText, testForm) {
		const {showToast, history} = this.props;
		if (testForm && !this.testForm(this.state.form)) {
			return showToast({text: `标题和名称必填`, toastType: 'error'})
		}
		act();
		showToast({text: toastText});
		history.goBack();
	}
}