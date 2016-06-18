import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import App from './components/App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

require('../styles/main.scss');

ReactDOM.render(
    <App />,
  document.getElementById('app')
);