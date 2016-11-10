import React from 'react';

import MyTest from './MyTest.jsx';
import TestActions from '../actions/TestActions.js';
import TestStore from '../stores/TestStore.js'


export default React.createClass({
	getInitialState(){
		return {
			items:TestStore.getAll()
		}
	},
	createNewItem(event){
		if(event.keyCode === 13){
            //let value = event.target.value;
            let value = this.refs.bottonVal.refs.keyWords.value;
            if(!value) return false;
            TestActions.addNewItem(value);
            event.target.value='';
        }
		
	},	
	deletItem(event){
		let index = event.target.dataset['index'];
		TestActions.deletItem(index)
		//console.log(index)
	},
	//页面第一次渲染完添加监听
	componentDidMount(){
		TestStore.addChangeListener(this._onChange);
	},
	_onChange(){
		this.setState({
			items:TestStore.getAll()
		})
	},
	//组件卸载后移除监听
	componentWillUnmount(){
		TestStore.removeChangeListener(this._onChange);
	},
	render(){
		return(
			<MyTest onKeyUp = {this.createNewItem} ref= "bottonVal" onClick={this.deletItem} items={this.state.items} />
		)
	}
});
