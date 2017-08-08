require('file?name=[name].[ext]!../index.html');
require('root/transitions.scss')

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Root from 'root';
import Home from 'Home';
import Album from 'Album';
import Contact from 'Contact';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={Root}>
			<IndexRoute component={Home} />
			<Route path='/album' component={Album} />
			<Route path='/contact' component={Contact} />
		</Route>
	</Router>
), document.getElementById('app'));
