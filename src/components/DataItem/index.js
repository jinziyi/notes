/**
 * Created by cjy on 16/11/23.
 */

import React from 'react'
import './style.scss';

const DataItem = ({title, link, name, history}) => {
	return (
		<div onClick={e => link ? history.push(link) : ''} className='c-data-item-root'>
			<div className="item-left">
				<div>{title}</div>
				<div className="name">{name}</div>
			</div>
			<div className="item-right">
				<div><i className="icon icon-info-circle primary"/></div>
				<div><i className="icon icon-chevron-right"/></div>
			</div>
		</div>
	)
}

export default DataItem;