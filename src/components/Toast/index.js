/**
 * Created by cjy on 16/11/23.
 */

import React, {PureComponent} from 'react'
import './style.scss';

class Toast extends PureComponent {
	types = {
		success: 'check',
		error: 'times',
		warning: 'warning',
	}

	componentWillReceiveProps(np) {
		if (np.autoClose > 0 && np.isShow === true) {
			this.t = setTimeout(e => {
				np.hide()
			}, np.autoClose)
		}
	}

	componentWillUnmount() {
		this.t && clearTimeout(this.t);
	}

	render() {
		const {props, types} = this;
		const {isShow, text, toastType = 'success'} = props;
		const icon = types[toastType]
		return (
			<div className={`c-toast-root ${isShow ? '' : 'hidden'}`}>
				<div className="icon-box">
					<i className={`fa fa-${icon}`}/>
				</div>
				<div className="text">
					{text}
				</div>
			</div>
		)
	}
}

export default Toast;