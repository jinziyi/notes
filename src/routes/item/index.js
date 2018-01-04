/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Component from './component';
import {changeValue} from 'actions/items';
import routes, {getRoute} from 'constants/routes';

const mapStateToProps = (state, props) => {
	return {
		isLogin: state.login,
		values: state.items.find(item => item.id === props.match.params.itemId)
	}
}

const mapDispatchToProps = {
	changeValue
}

export default connect(mapStateToProps, mapDispatchToProps,)(Component);