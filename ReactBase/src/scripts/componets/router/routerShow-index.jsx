'use strict';

import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render(){
		return(
			<div>							
				<Link to="tv/shows/:2">电视节目列表</Link>
			</div>
		)
	}
})
