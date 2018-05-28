import React from 'react';
import { render } from 'react-dom';
import './index.scss';
// redux 
import { SearchPage } from './containers/SearchPage';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { App } from './containers/App';
import { MovieDetailsPage } from './containers/MovieDetailsPage';

render(
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={SearchPage} />
                <Route path="/film/:id" component={MovieDetailsPage} />
            </Switch>
        </App>
    </Router>,
    document.getElementById('searchPage')
);