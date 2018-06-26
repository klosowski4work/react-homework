
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { loadState, saveState } from './localStorage';


const persistedState = loadState();

const store = createStore(reducer, persistedState, composeWithDevTools(
  applyMiddleware(thunk),
));

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
