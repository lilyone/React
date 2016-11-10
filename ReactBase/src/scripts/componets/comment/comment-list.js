'use strict';

import React from 'react';
import CommentItem from './comment-item';

class CommentList extends React.Component{
	render(){
		let commentNodes = this.props.data.map((comment,index) =>{
			return (
				<CommentItem key={index} author={comment.author} date={comment.date}>
					{comment.content}
				</CommentItem>
			)
		})
		return (
			<div>
//				react具有数组自展开的功能
				{commentNodes}
			</div>
		)
	}
}
export {CommentList as default};