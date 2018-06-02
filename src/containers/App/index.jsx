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
import './style.scss';


export class App extends React.Component {
    myErrorHandler(error, componentStack) {
        console.log(error, componentStack);
    };

    render() {
        return <ErrorBoundary onError={() => this.myErrorHandler()}>
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
    };
}
