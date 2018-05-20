
import React from 'react';
import { SortBy } from '../SortBy';
import { Movie } from '../../components/Movie';
import './style.scss';
import { MoviesService } from '../../services/movies.service';
import { connect } from 'react-redux';
import { loadData } from './actions';

@connect((state) => ({
    results: state.results.results,
}))
export class Results extends React.Component {
    constructor(params) {
        super(params);
        this.state = {
            results: [],
        }
    }
    render() {
        const emptyElements = [1, 2, 3, 4];
        const { dispatchSearchBy, searchBy } = this.props;

        return <div className={( this.props.results.loading ? "results results--loading" : "results")}>
            <div className="results__header">
                <span className="results__header-movies-count">{this.props.results.total} movies found</span>
                <SortBy />
            </div>
            <div className="results__container">
                {
                    this.props.results.movies.map((movie, index) => {
                        return <Movie
                            key={index}
                            title={movie.title}
                            type={movie.genres}
                            cover={movie.cover}
                            releaseDate={movie.releaseYear}
                        />
                    })
                }
                {
                    emptyElements.map((key) => {
                        return <div key={key} className="movie movie--empty"></div>
                    })
                }
            </div>
        </div>
    }
};
