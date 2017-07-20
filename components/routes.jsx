import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import Root from 'root';
import Home from 'Home';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route component={Root}>
			<Route path='/' component={Home} />
		</Route>
	</Router>
), document.getElementById('app'));
