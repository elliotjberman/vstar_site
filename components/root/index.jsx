import React, { Component } from 'react';
import './style.scss';
import PageTransition from 'react-router-page-transition';


export default ({ children, ...props}) =>
<div className='root'>
	<PageTransition timeout={750}>
		{children}
	</PageTransition>
</div>
