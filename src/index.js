import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import App from './components/App';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();
