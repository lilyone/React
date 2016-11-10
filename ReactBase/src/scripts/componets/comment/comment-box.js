'use strict';

import React from 'react';

import CommentList from './comment-list';
import CommentForm from './comment-form';

class CommentBox  extends React.Component{
	constructor(props){
		super(props)
		this.state ={data:[]};
		//setInterval(this.getComments.bind(this),3000);
		this.getComments();
		
	};
	getComments(){
		//console.log(0)
		fetch(this.props.url).then(response => response.json()).then(data=>{
			this.setState({data:data});
		}).catch(e=>{
			console.log("Oops, error");
		})
		
	};
	handleSubmit(coment){
		let comment = this.state.data;
		comment.push(coment);
		this.setState({data:comment});
	}
	render(){
		return(
			<div className = "m-index">
				<h1>评论 </h1>
				<CommentList data={this.state.data}/>
				<CommentForm x={this.handleSubmit.bind(this)}/>
			</div>
		)
	}
}

export {CommentBox as default};


