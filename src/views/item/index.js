/**
 * Created by cjy on 16/11/23.
 */
import {connect} from 'react-redux';
import Component from './component';
import {updateItem, createItem, deleteItem} from 'actions/items';
import {show, hide} from 'actions/toast';

const mapStateToProps = (state, props) => {
	return {
		isLogin: state.login.isLogin,
		values: state.items.find(item => item.id === props.match.params.itemId)
	}
}

const mapDispatchToProps = {
	updateItem,
	createItem,
	deleteItem,
	showToast: show,
	hideToast: hide,
}

export default connect(mapStateToProps, mapDispatchToProps,)(Component);