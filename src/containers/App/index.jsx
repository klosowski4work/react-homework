
import React from 'react';
import ErrorBoundary from 'react-error-boundary';
import { Button } from '../../components/Button';
import { FilmDetails } from '../MovieDetails';
import { Header } from '../Header';
import { SearchField } from '../../components/SearchField';
import './style.scss';
import { Logo } from '../../components/Logo';
import './style.scss';
import { Footer } from '../Footer';
import { Results } from '../Results';
export class App extends React.Component {
    myErrorHandler(error, componentStack) {
        console.log(error, componentStack);
    };

    render() {
        return <ErrorBoundary onError={() => this.myErrorHandler()}>
            <div className="app">
                <Header />
                <div className="app__body">
                    <Results />
                </div>
                <Footer />
            </div>
        </ErrorBoundary>
    }
};