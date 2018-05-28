import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import ErrorBoundary from 'react-error-boundary';

import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
export class App extends React.Component {
    myErrorHandler(error, componentStack) {
        console.log(error, componentStack);
    };
    render() {
        return <ErrorBoundary onError={() => this.myErrorHandler()}>
            <Provider store={store}>
                {this.props.children}
            </Provider>
        </ErrorBoundary >
    };
}
