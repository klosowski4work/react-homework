
import { middleware } from './configs/redux.middleware';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { offline } from '@redux-offline/redux-offline';

export default createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk),
));
