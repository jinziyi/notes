/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {getRoute} from 'constants/routes';
import './style.scss';
import Footer from 'components/Footer';
import DataItem from 'components/DataItem';
import requireLogin from 'containers/requireLogin';

@requireLogin
export default class Favour extends PureComponent {
	render() {
		const {items = [], match} = this.props;
		return (
			<div className="v-group-root">
				<div className="body scroll">
					{items.map((item) => (
						<DataItem {...this.props} {...item}/>
					))}
				</div>
				<Link to={getRoute('create')} className="create">
					<i className="fa fa-plus-square primary"/>
				</Link>
				<Footer {...this.props}/>
			</div>
		)
	}
}