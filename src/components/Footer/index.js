/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import routes from '../../constants/routes';
import './style.scss';

const Footer = ({match = {}}) => {
	const navs = [
		{
			key: 'home',
			icon: 'file-text-o',
			link: routes.home,
			text: '首页',
		},
		{
			key: 'favour',
			icon: 'heart',
			link: routes.favour,
			text: '收藏',
		},
		{
			key: 'setting',
			icon: 'cog',
			link: routes.setting,
			text: '设置',
		},
	]
	const activeIndex = navs.findIndex(nav => nav.link === match.url)
	return (
		<div className='c-footer-root'>
			{
				navs.map((nav, i) => (
					<Link to={nav.link} className={`nav-item ${activeIndex === i ? 'primary' : ''}`}>
						<div className="icon">
							<i className={`fa fa-${nav.icon}`}/>
						</div>
						<div className="text">
							{nav.text}
						</div>
					</Link>
				))
			}
		</div>
	)
}

export default Footer;