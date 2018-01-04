/**
 * Created by cjy on 16/11/23.
 */

import React, {PureComponent} from 'react'
import './style.scss';

class Toast extends PureComponent {
	types = {
		success: 'check-circle-o',
		error: 'times-circke-o',
		warning: 'warning',
	}
	render() {
		const {props, types} = this;
		const {isShow, text, toastType = 'success'} = props;
		const icon = types[toastType]
		return (
			<div className={`c-toast-root ${isShow ? '' : 'hidden'}`}>
				<div>
					<i className={`fa fa-${icon}`}/>
				</div>
				<div>
					{text}
				</div>
			</div>
		)
	}
}

export default Toast;