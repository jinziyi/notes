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
	render() {
		const {settings = []} = this.props;
		return (
			<div className="v-setting-root">
				<div className="body scroll">
					{settings.map((set) => (
						<Item {...this.props} {...set}/>
					))}
				</div>
				<Footer {...this.props}/>
			</div>
		)
	}
}