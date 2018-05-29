import React from 'react';
import { render } from 'react-dom';
import './index.scss';
// redux 
import { SearchPage } from './containers/SearchPage';
import { HashRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import { App } from './containers/App';
import { MovieDetailsPage } from './containers/MovieDetailsPage';
import { Page404 } from './containers/Page404';
import { Header } from './components/Header';



render(
    <Router>
        <App>
            <Switch>
                <Route path="/search" component={SearchPage} />
                <Route path="/film/:id" component={MovieDetailsPage} />
                <Route exact path="/" component={SearchPage} />
                <Route path="*" component={Page404} />
            </Switch>
        </App>
    </Router>,
    document.getElementById('searchPage')
);