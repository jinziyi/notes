/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Component from './component';
import {logout} from 'actions/login';
import {getRoute} from 'constants/routes';

const mapStateToProps = (state) => {
	return {
		isLogin: state.login,
		groups: [
			{
				title: '所有',
				count: 0,
				groupId: 0,
			},
			...state.groups
		].map(group => ({...group, link: getRoute('groupList', {groupId: group.groupId})})),
	}
}

const mapDispatchToProps = {
	logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);