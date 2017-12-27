/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

export default ({location}) => (
	<div className="center col">
		<div>
			没有此路由：{location.pathname}
		</div>
		<Link to="/">返回首页</Link>
	</div>
)