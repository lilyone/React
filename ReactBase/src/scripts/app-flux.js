'use strict';

import "../styles/usage/page/app.scss";

import React from 'react';
import ReactDOM from 'react-dom';

import MyBottonController from './flux/components/MyButtonController.jsx';

  
let app =document.getElementById("app");


ReactDOM.render((
	<MyBottonController/>
),app);

//热加载
if(module.hot){
	module.hot.accept();
}
