'use strict';

import React from 'react';

class CommentItem extends React.Component{
	render(){
		return(
			<div className="comment">
				<span>{this.props.author}</span>
				<span>{this.props.date}</span>
				<div>{this.props.children}</div>
			</div>
		)
	}
}
export {CommentItem as default};