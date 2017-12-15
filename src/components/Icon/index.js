/**
 * Created by cjy on 16/11/23.
 */
import React from 'react';
import FontAwesome from 'react-fontawesome';
import faStyles from 'font-awesome/css/font-awesome.css';

const Icon = (props = {}) => {
	return (
		<FontAwesome
			cssModule={faStyles}
			{...props}
		/>
	)
}

export default Icon;