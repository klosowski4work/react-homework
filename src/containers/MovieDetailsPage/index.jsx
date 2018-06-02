
import React from 'react';
import { Button } from '../../components/Button';
import { Results } from '../Results';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import './style.scss';
import { loadData } from './actions';
import { loadData as loadRelatedMoviesData } from '../Results/actions';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { MovieDetails } from '../../components/MovieDetails';
import { SEARCH_BY } from '../SearchMovie';
import { search } from '../SearchMovie/actions';
import { SORT_BY } from '../../components/SortBy';

@connect((state) => ({
    movie: state.movieDetails.movie,
}))
export class MovieDetailsPage extends React.Component {
    constructor(params) {
        super(params);
    }
    componentDidMount() {
        this.reloadPage(this.props.match.params.id);
    }
    componentWillReceiveProps(newProps) {
        const { id: prevId } = this.props.match.params;
        const { id: newId } = newProps.match.params;
        if (prevId !== newId) {
            this.reloadPage(newProps.match.params.id);
        }
    }
    reloadPage(id) {
        this.props.dispatch(loadData(id, (results) => {
            const params = {
                sortBy: SORT_BY.RELEASE_DATA,
                searchBy: SEARCH_BY.GENRE,
                search: results.genres[0],
                sortOrder: 'desc',
            }
            this.props.dispatch(search(params.search));
            this.props.dispatch(loadRelatedMoviesData(params));
        }));
    }
    render() {
        return <div className="movie-detail-page">
            <MovieDetails {...this.props} />
            <div className="movie-detail-page__search-button">
                <Link to='/search'><Button color="red-reverse" text="SEARCH"></Button></Link>
            </div>
        </div>
    }
};