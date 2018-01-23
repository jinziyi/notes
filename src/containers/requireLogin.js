/**
 * Created by cjy on 16/11/23.
 */
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default (SourceComponent) => class extends Component {
	static displayName = 'RequireLogin_' + (SourceComponent.displayName || SourceComponent.name || 'Component')

	render() {
		if (this.props.isLogin) {
			return <SourceComponent {...this.props}/>
		} else {
			return <Redirect to="/login"/>
		}
	}
}