'use strict';

import "../styles/usage/page/app.scss";

import React from 'react';
import ReactDOM from 'react-dom';

//import Router
import {Router,Route,hashHistory,IndexRoute,Redirect} from 'react-router';
// router components
import App from './componets/router/router-app.jsx';

import TV from './componets/router/router-tv.jsx';
import Shows from './componets/router/router-show.jsx';
import ShowsIndex from './componets/router/routerShow-index.jsx';
  
let app =document.getElementById("app");

let handleEnter =()=>{
	console.log('enterd');
}
let handleLeave =()=>{
	console.log('leave');
}

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="tv" component={TV}>
				<IndexRoute component={ShowsIndex}></IndexRoute>
				<Route path="shows/:id" onEnter={handleEnter} onLeave={handleLeave} component={Shows} />
				<Redirect from="shows/:id" to="/shows/:id"/>
			</Route>
		</Route>
	</Router>
),app);

//热加载
if(module.hot){
	module.hot.accept();
}
