/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from 'actions/login'

class Init extends PureComponent {
	componentDidMount(){
		if(!this.props.isLogin){
			this.props.getUserInfo();
		}
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
	getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Init);