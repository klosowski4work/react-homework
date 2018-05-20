
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
import PropTypes from 'prop-types';

import { createStore } from 'redux';
import { connect } from 'react-redux';


@connect((state) => {
    return {    }
})
export class App extends React.Component {
    static propTypes = {
        searchBy: PropTypes.string,
    };

    constructor(params) {
        super(params);
    }
    myErrorHandler(error, componentStack) {
        console.log(error, componentStack);
    };
    render() {
        const { searchBy, dispatchSearchBy } = this.props;
        return <ErrorBoundary onError={() => this.myErrorHandler()}>
            <div className="app">
                <Header />
                <div className="app__body">
                    <Results />
                </div>
                <Footer />
            </div>
        </ErrorBoundary >
    }
};