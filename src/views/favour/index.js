/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Component from './component';
import {logout} from 'actions/login';
import routes, {getRoute} from 'constants/routes';

const mapStateToProps = (state, props) => {
	return {
		isLogin: state.login.isLogin,
		items: state.items.filter(item => item.favour).map(item => ({
			...item,
			link: getRoute('item', {itemId: item.id})
		})),
	}
}

export default connect(mapStateToProps)(Component);