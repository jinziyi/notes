/**
 * Created by cjy on 16/11/23.
 */

import React, {PureComponent} from 'react'

class Bundle extends PureComponent {
	state = {
		mod: null
	}

	componentWillMount() {
		this.load(this.props)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.load !== this.props.load) {
			this.load(nextProps);
		}
	}

	load = props => {
		this.setState({
			mod: null
		});
		props.load(mod => {
			this.setState({
				mod: mod ? mod : null
			});
		});
	}

	render() {
		return this.state.mod ? this.props.children(this.state.mod) : null;
	}
}

export default Bundle;

export const bundle = getComponent => (props) => (
	<Bundle load={getComponent}>
		{(Chat) => <Chat {...props}/>}
	</Bundle>
)