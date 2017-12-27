/**
 * Created by cjy on 16/11/23.
 */
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default (SourceComponent) => class extends Component{
	render(){
		if(this.props.isLogin){
			return <SourceComponent {...this.props}/>
		}else {
			return <Redirect to="/login"/>
		}
	}
}