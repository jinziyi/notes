/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Component from './component';
import {logout} from 'actions/login';
import routes from 'constants/routes';

const mapStateToProps = (state) => {
	return {
		isLogin: state.login,
		groups: state.groups.map(group => ({...group, link: routes.itemNew})),
	}
}

export default connect(mapStateToProps)(Component);