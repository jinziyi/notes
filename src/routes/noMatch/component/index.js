/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

export default ({location, history}) => {
	return (
		<div className="center col">
			<div>
				没有此路由：{location.pathname}
			</div>
			<div onClick={history.goBack}>返回</div>
		</div>
	)
}