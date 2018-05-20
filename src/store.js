
import { middleware } from './configs/redux.middleware';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { offline } from '@redux-offline/redux-offline';
import { loadState, saveState } from './localStorage';


const persistedState = loadState();

const store = createStore(reducer, persistedState, composeWithDevTools(
    applyMiddleware(thunk),
));

store.subscribe(() => {
    saveState(store.getState());
})

export default store;