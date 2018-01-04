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
import Login from '../routes/login/route';
import Setting from '../routes/setting/route';
import Favour from '../routes/favour/route';
import Item from '../routes/item/route';
import NoMatch from '../routes/noMatch';


class App extends PureComponent {
	render() {
		return (
			<Router>
				<div className="app-root">
					<Switch>
						<Route exact path={routes.home} component={Home}/>
						<Route exact path={routes.favour} component={Favour}/>
						<Route exact path={routes.item} component={Item}/>
						<Route exact path={routes.create} component={Item}/>
						<Route exact path={routes.login} component={Login}/>
						<Route exact path={routes.setting} component={Setting}/>
						<Route component={NoMatch}/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default wrapWithRedux(App);