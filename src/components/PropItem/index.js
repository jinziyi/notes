/**
 * Created by cjy on 16/11/23.
 */

import React, {PureComponent} from 'react'
import './style.scss';

const PropItem = ({label, value, onChange = e => e, placeholder, showViewIcon, toggleView = e => e, type = 'text'}) => {
	return (
		<div className='c-prop-item-root'>
			<div className="item-left">
				{label}
			</div>
			<div className="item-right">
				<input value={value} onChange={onChange} placeholder={placeholder} type={type}/>
				{showViewIcon ?
					<i onClick={toggleView} className={`icon icon-eye${type === 'text' ? ' primary' : '-slash'}`}/> : null
				}
			</div>
		</div>
	)
}

export default PropItem;