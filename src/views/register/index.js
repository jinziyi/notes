/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Component from './component';
import {login} from 'actions/login'
import {show} from 'actions/toast'

const mapStateToProps = (state) => {
	return {
		isLogin: state.login
	}
}

const mapDispatchToProps = {
	register: login,
	toast: show,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);