/**
 * Created by cjy on 16/11/23.
 */

import React from 'react'
import './style.scss';

const Item = ({title, link, count, history}) => {
	return (
		<div onClick={e => link ? history.push(link) : ''} className='c-item-root'>
			<div>
				{title}
			</div>
			<div className="item-right">
				<div className="count">{count}</div>
				<div><i className="fa fa-chevron-right"/></div>
			</div>
		</div>
	)
}

export default Item;