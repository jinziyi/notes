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
import Login from '../routes/login/route';
import NoMatch from '../routes/noMatch';


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