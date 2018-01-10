/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Component from './component';
import {login} from 'actions/login'
import {getItem} from 'actions/items'
import {show} from 'actions/toast'

const mapStateToProps = (state) => {
	return {
		isLogin: state.login.isLogin
	}
}

const mapDispatchToProps = {
	login,
	toast: show,
	getItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);