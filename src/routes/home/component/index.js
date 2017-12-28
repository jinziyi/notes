/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import Icon from 'components/Icon';
import requireLogin from 'containers/requireLogin';

@requireLogin
export default class Home extends PureComponent {
	render() {
		return (
			<div className="center col">
				<Link to="/demo">
					Hello World
					<Icon name="qq"/>
				</Link>
				<div onClick={this.props.logout}>
					退出
				</div>
			</div>
		)
	}
}