import React from 'react';

import MyButton from './MyButton.jsx';
import ButtonActions from '../actions/ButtonActions.js';
import ListStore from '../stores/ListStore.js'


export default React.createClass({
	getInitialState(){
		return {
			items:ListStore.getAll()
		}
	},
	createNewItem(){
		ButtonActions.addNewItem('NewwwwwwwItem')
	},
	//页面第一次渲染完执行
	componentDidMount(){
		ListStore.addChangeListener(this._onChange);
	},
	_onChange(){
		this.setState({
			items:ListStore.getAll()
		})
	},
	//组件卸载
	componentWillUnmount(){
		ListStore.removeChangeListener(this._onChange);
	},
	render(){
		return(
			<MyButton onClick={this.createNewItem} items={this.state.items}/>
		)
	}
});
