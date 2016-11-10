import React from 'react';

export default React.createClass({
	render(){
		let items = this.props.items;
		let itemHTML = items.map((listItem,i)=>{
			return <li key={i}>{listItem}<button data-index={i} onClick={this.props.onClick}>X</button></li>
		})
		return (
			<div>
			<input type="text" onKeyUp ={this.props.onKeyUp } ref= "keyWords"/>
				<ul>
					{itemHTML}					
				</ul>
			</div>
		)
	}
})
