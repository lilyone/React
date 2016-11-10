import React from 'react';
import ReactDOM from 'react-dom';

import Container from './componets/lifeCycle/Container.js';

ReactDOM.render(
  <Container />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
