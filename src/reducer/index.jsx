import { combineReducers } from "redux";
import searchPage from "../containers/SearchPage/reducer";
import searchMovie from '../containers/SearchMovie/reducer';
import resultsContainer from '../containers/Results/reducer';
import sort from '../components/SortBy/reducer';
import movieDetails from '../containers/MovieDetailsPage/reducer';

export default combineReducers({
    searchPage,
    searchMovie,
    resultsContainer,
    sort,
    movieDetails,
});