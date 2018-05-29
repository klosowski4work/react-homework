
import React from 'react';
import { Button } from '../../components/Button';
import { Results } from '../Results';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MovieDetails } from '../MovieDetails';
import './style.scss';
import { loadData } from './actions';
import { laodData as loadRelatedMoviesData } from '../Results/actions';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

@connect((state) => ({
    results: state.resultsContainer.results,

}))
export class MovieDetailsPage extends React.Component {
    constructor(params) {
        super(params);
    }
    componentDidMount() {
        this.reloadPage(this.props.match.params.id);
    }
    componentWillReceiveProps(newProps) {
        this.reloadPage(newProps.match.params.id);
    }
    reloadPage(id) {
        this.props.dispatch(loadData(id));
    }
    render() {
        return <div className="movie-detail-page">
            <Header>
                <MovieDetails />
                <div className="movie-detail-page__search-button">
                    <Link to='/search'><Button color="red-reverse" text="SEARCH"></Button></Link>
                </div>
            </Header>
            <div className="movie-detail-page__body">
                <Results />
            </div>
            <Footer />
        </div>
    }
};