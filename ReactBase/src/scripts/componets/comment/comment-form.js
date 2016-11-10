'use strict';

import React from 'react';

class CommentForm extends React.Component{
	handleClick(){
		let author = this.refs.author.value,
			content = this.refs.content.value;
		
		this.props.x({author,content,date:new Date().getTime()});
		this.refs.author.value ="";
		this.refs.content.value="";
	}
	render(){
		return(
			<div className="yo-list">
				<label className="item item-input" >
					<input type="text" className="yo-input flex" ref="author" placeholder="发布人" />
				</label>
				<label className="item item-input">
					<textarea className="yo-input flex" ref="content" placeholder="留言内容"></textarea>
				</label>
				<label>
		          <button onClick={this.handleClick.bind(this)} className="yo-btn yo-btn-l">发评论</button>
		        </label>
			</div>
		)
	}
}
export {CommentForm as default};