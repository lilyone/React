'use strict';

import "../styles/usage/page/app.scss";

import React from 'react';
import ReactDOM from 'react-dom';

import MyTestController from './flux_toList/components/MyTestController.jsx';

  
let app =document.getElementById("app");


ReactDOM.render((
	<MyTestController/>
),app);

//热加载
if(module.hot){
	module.hot.accept();
}
