/**
 * Created by cjy on 16/11/23.
 */
import {bundle} from 'components/Bundle';

export default bundle((cb) => {
	require.ensure([], require => {
		cb(require('./index.js').default);
	}, 'home');
})