
import './style.scss';
import React from 'react';
import ErrorBoundary from 'react-error-boundary';
import { Button } from '../../components/Button';
import { FilmDetails } from '../MovieDetails';
import { SearchField } from '../../components/SearchField';
import { Logo } from '../../components/Logo';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Results } from '../Results';

// redux 
import { reducer } from './reducer';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

const initialState = {
    searchBy: 'title',
}

const store = createStore(reducer, initialState);

const unsubscribe = connect((state) => {
    return {
        test: 'test',
    }
}, (dispatch) => {
    return {
        someFun: () => dispatch({ type: 'some_action' })
    }
});

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