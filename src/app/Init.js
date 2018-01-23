/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from 'actions/login';
import {getItem} from 'actions/items';

class Init extends PureComponent {
	componentDidMount() {
		this.props.getUserInfo();
		this.props.getItem();
	}

	render() {
		return (
			<div/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isLogin: state.login.isLogin
	}
}

const mapDispatchToProps = {
	getUserInfo,
	getItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Init);