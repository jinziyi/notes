/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import './style.scss';
import Footer from 'components/Footer';
import Item from 'components/Item';
import requireLogin from 'containers/requireLogin';

@requireLogin
export default class Home extends PureComponent {
	render() {
		const {groups = []} = this.props;
		return (
			<div className="v-add-root">
				<div className="body scroll">
					{groups.map((item) => (
						<Item {...this.props} {...item}/>
					))}
				</div>
				<Footer {...this.props}/>
			</div>
		)
	}
}