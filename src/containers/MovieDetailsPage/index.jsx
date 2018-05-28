
import React from 'react';
import { Button } from '../../components/Button';
import { Results } from '../Results';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { MovieDetails } from '../MovieDetails';
import './style.scss';
import { loadData } from './actions';
import { connect } from 'react-redux';


@connect((state) => ({
    results: state.results.results,
}))
export class MovieDetailsPage extends React.Component {
    constructor(params) {
        super(params);
    }
    componentWillReceiveProps(newProps) {
        this.props.dispatch(loadData(newProps.match.params.id));
    }
    render() {
        return <div className="movie-detail-page">
            <Header>
                <MovieDetails />
            </Header>
            <div className="movie-detail-page__body">
                <Results />
            </div>
            <Footer />
        </div>
    }
};