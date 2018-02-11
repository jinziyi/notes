/**
 * Created by cjy on 16/11/23.
 */
import {connect} from 'react-redux';
import Component from './component';
import {updatePassword} from 'actions/password';
import {show, hide} from 'actions/toast';

const mapStateToProps = (state) => {
	return {
		isLogin: state.login.isLogin,
	}
}

const mapDispatchToProps = {
	showToast: show,
	hideToast: hide,
	updatePassword,
}

export default connect(mapStateToProps, mapDispatchToProps,)(Component);