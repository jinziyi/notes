/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Component from './component';
import {logout} from 'actions/login'

const mapStateToProps = (state) => {
	return {
		isLogin: state.login.isLogin,
		username: state.login.username
	}
}

const mapDispatchToProps = {
	logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);