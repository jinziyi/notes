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
import {AnimatedSwitch} from 'react-router-transition';
import {bounceTransition, mapStyles} from 'constants/animateConfig';
import wrapWithRedux from '../redux';
import ToastSeed from 'components/Toast';
import {connectToast} from 'actions/toast';
import routes from 'constants/routes';
import './style.scss';
import Home from '../views/home';
import Register from '../views/register/route';
import Login from '../views/login/route';
import Setting from '../views/setting/route';
import Favour from '../views/favour/route';
import Item from '../views/item/route';
import NoMatch from '../views/noMatch';

const Toast = connectToast(ToastSeed);

class App extends PureComponent {
	render() {
		return (
			<Router>
				<div className="app-root">
					<AnimatedSwitch
						atEnter={bounceTransition.atEnter}
						atLeave={bounceTransition.atLeave}
						atActive={bounceTransition.atActive}
						mapStyles={mapStyles}
						className="route-wrapper"
					>
						<Route exact path={routes.home} component={Home}/>
						<Route exact path={routes.favour} component={Favour}/>
						<Route exact path={routes.item} component={Item}/>
						<Route exact path={routes.create} component={Item}/>
						<Route exact path={routes.register} component={Register}/>
						<Route key="das" exact location={location} path={routes.login} component={Login}/>
						<Route exact path={routes.setting} component={Setting}/>
						<Route component={NoMatch}/>
					</AnimatedSwitch>
					<Toast/>
				</div>
			</Router>
		)
	}
}

export default wrapWithRedux(App);