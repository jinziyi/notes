/**
 * Created by cjy on 16/11/23.
 */
import React, {PureComponent} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Icon from 'components/Icon';
import './style.scss';

export default class App extends PureComponent {
	render() {
		return (
			<Router>
				<div styleName="app">
					<Route exact path="/" component={Home}/>
					<Route exact path="/demo" component={Demo}/>
				</div>
			</Router>
		)
	}
}

export const Home = () => (
	<Link className="center" to="/demo">
		Hello World
		<Icon name="qq"/>
	</Link>
)

export const Demo = ({history}) => {
	return (
		<div onClick={history.goBack} className="center">
			demo页面
		</div>
	)
}