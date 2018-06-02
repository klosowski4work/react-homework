import React from 'react';
import { render } from 'react-dom';
import './index.scss';
// redux 
import { App } from './containers/App';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from './store';


render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('searchPage')
);