import React from 'react';
import { hydrate } from 'react-dom';
import { App } from './containers/App';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from './store';
import './index.scss';

hydrate(
    <App store={store} Router={Router} />,
    document.getElementById('root')
);
