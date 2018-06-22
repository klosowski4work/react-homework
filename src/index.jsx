import React from 'react';
import { render } from 'react-dom';
import './index.scss';
// redux 
import App from './containers/App';
import { StaticRouter as Router } from 'react-router-dom';
import store from './store';


render(
    <App store={store} Router={Router} />,
    document.getElementById('root')
);