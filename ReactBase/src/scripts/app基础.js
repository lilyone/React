'use strict';

import "../styles/usage/page/app.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './componets/comment/comment-box.js';
import Name from './name.jsx';


//ReactDOM.render 是 React 的最基本方法，
//用于将模板转为 HTML 语言，并插入指定的 DOM 节点
ReactDOM.render(
	//<CommentBox url="./mock/comments.json"/>,
	<Name/>,
	document.getElementById('app')
)

//热加载
if(module.hot){
	module.hot.accept();
}
