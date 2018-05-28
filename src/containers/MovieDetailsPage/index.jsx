
import React from 'react';
import { Button } from '../../components/Button';
import { Results } from '../Results';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { MovieDetails } from '../MovieDetails';
import './style.scss';
import { loadData } from './actions';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

@connect((state) => ({
    results: state.results.results,
}))
export class MovieDetailsPage extends React.Component {
    constructor(params) {
        super(params);
    }
    componentDidMount() {
        this.props.dispatch(loadData(this.props.match.params.id));
    }
    componentWillReceiveProps(newProps) {
        this.props.dispatch(loadData(newProps.match.params.id));
    }
    render() {
        return <div className="movie-detail-page">
            <Header>
                <MovieDetails />
                <div className="movie-detail-page__search-button">
                    <Link to='/'><Button color="red-reverse" text="SEARCH"></Button></Link>
                </div>
            </Header>
            <div className="movie-detail-page__body">
                <Results />
            </div>
            <Footer />
        </div>
    }
};