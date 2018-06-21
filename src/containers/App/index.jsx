import React from 'react';
import ErrorBoundary from 'react-error-boundary';
import { render } from 'react-dom';
import { Route, Switch, Link } from 'react-router-dom';
import { MovieDetailsPage } from '../MovieDetailsPage';
import { Page404 } from '../../components/Page404';
import { SearchPage } from '../SearchPage';
import { SearchMovie } from '../SearchMovie';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Results } from '../Results';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';


class App extends React.Component {
    static propTypes = {
        Router: PropTypes.func.isRequired,
        location: PropTypes.string,
        context: PropTypes.shape({
            url: PropTypes.string,
        }),
        store: PropTypes.shape({
            dispatch: PropTypes.func.isRequired,
            getState: PropTypes.func.isRequired,
        }).isRequired,
    }
    static defaultProps = {
        location: null,
        context: null,
    }
    constructor(params) {
        super(params);
    }

    myErrorHandler(error, componentStack) {
        console.log(error, componentStack);
    };

    render() {
        const { store, Router, location, context } = this.props;
        return <Provider store={store}>
            <Router location={location} context={context}>
                <ErrorBoundary onError={() => this.myErrorHandler()}>
                    <div className="app">
                        <Header>
                            <Switch>
                                <Route exact path="/" component={SearchPage} />
                                <Route path="/search" component={SearchPage} />
                                <Route path="/film/:id" component={MovieDetailsPage} />
                            </Switch>
                        </Header>
                        <div className="app__body">
                            <Switch>
                                <Route exact path="/" component={Results} />
                                <Route path="/search">
                                    <Results hasSort="true" />
                                </Route>
                                <Route path="/film">
                                    <Results />
                                </Route>
                                <Route path="*" component={Page404} />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </ErrorBoundary >
            </Router>
        </Provider>
    };
}

export default hot(module)(App);