'use strict';

import React from 'react';

export default React.createClass({
	render(){
		return(
			<div>
				<h1>
					节目详情{this.props.params.id}
				</h1>
			</div>
		)
	}
})
