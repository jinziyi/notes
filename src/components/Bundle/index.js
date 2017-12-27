/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react'

class Bundle extends Component {
	state = {
		mod: null
	}

	componentWillMount() {
		this.load(this.props)
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

export default Bundle