import { combineReducers } from "redux";
import app from "../containers/App/reducer";
import searchMovie from '../containers/SearchMovie/reducer';
import results from '../containers/Results/reducer';
import sort from '../containers/SortBy/reducer';

export default combineReducers({
    app,
    searchMovie,
    results,
    sort,
});