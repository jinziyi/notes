/**
 * Created by cjy on 16/11/23.
 */
import React from 'react';
import './style.scss';

const NoMatch = ({location, history}) => {
	return (
		<div className="v-no-match-root">
			<div>
				没有此路由：<span className="error">{location.pathname}</span>
			</div>
			<div className="go-back" onClick={history.goBack}>返回</div>
		</div>
	)
}

export default NoMatch;