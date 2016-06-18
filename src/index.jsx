import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Router, { Route } from 'react-router';

require('../styles/main.scss');

ReactDOM.render(
    <h1> Hello World </h1>,  document.getElementById('app')
);