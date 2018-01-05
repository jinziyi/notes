/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import './style.scss';
import Footer from 'components/Footer';
import Item from 'components/Item';
import requireLogin from 'containers/requireLogin';

@requireLogin
export default class Setting extends PureComponent {
	settings = [
		{
			title: '修改密码',
			route: 'changePassword',
		},
	]

	render() {
		const {settings, props} = this;
		const {logout} = props;
		return (
			<div className="v-setting-root">
				<div className="body scroll">
					{settings.map((set) => (
						<Item {...this.props} {...set}/>
					))}
				</div>
				<div className="btn-box">
					<div onClick={e => window.confirm('确定退出登陆吗？') && logout()} className="btn danger">退出登录</div>
				</div>
				<Footer {...this.props}/>
			</div>
		)
	}
}