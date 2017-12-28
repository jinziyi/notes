/**
 * Created by cjy on 16/11/23.
 */
import React from 'react';
import Bundle from 'components/bundle';

export default (props) => (
	<Bundle load={(cb) => {
		require.ensure([], require => {
			cb(require('./index.js').default);
		}, 'login');
	}}>
		{(Chat) => <Chat {...props}/>}
	</Bundle>
)