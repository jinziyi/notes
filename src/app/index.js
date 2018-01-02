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
import routes from '../constants/routes';
import './style.scss';
import Home from '../routes/home';
import Add from '../routes/add';
import Login from '../routes/login/route';
import NoMatch from '../routes/noMatch';


class App extends PureComponent {
	render() {
		return (
			<Router>
				<div className="app-root">
					<Switch>
						<Route exact path={routes.group} component={Home}/>
						<Route exact path={routes.add} component={Add}/>
						<Route exact path={routes.login} component={Login}/>
						<Route component={NoMatch}/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default wrapWithRedux(App);