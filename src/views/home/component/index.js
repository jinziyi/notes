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
export default class Home extends PureComponent {
	render() {
		const {items = [], match} = this.props;
		return (
			<div className="v-group-root">
				<div className="body scroll">
					{items.length ? items.map((item) => (
						<DataItem {...this.props} {...item}/>
					)) : <div className="center empty">没有数据</div>}
				</div>
				<Link to={getRoute('create')} className="tap-position">
					<i className="fa fa-plus-square primary"/>
				</Link>
				<Footer {...this.props}/>
			</div>
		)
	}
}