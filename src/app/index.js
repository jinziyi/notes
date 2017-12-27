/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import wrapWithRedux from '../redux';
import './style.scss';
import Home from '../routes/home';
// import Login from '../routes/login/index.bundle';
import NoMatch from '../routes/noMatch';

import Bundle from 'components/Bundle';

const Login = (props) => (
	<Bundle load={(cb) => {
		require.ensure([], require => {
			cb(require('../routes/login/index.js'));
		}, 'login');
	}}>
		{(Chat) => <Chat {...props}/>}
	</Bundle>
)

class App extends PureComponent {
	render() {
		return (
			<Router>
				<div styleName="app">
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/login" component={Login}/>
						<Route component={NoMatch}/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default wrapWithRedux(App);