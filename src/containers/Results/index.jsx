
import React from 'react';
import { Movie } from '../../components/Movie';
import './style.scss';
import { MoviesService } from '../../services/movies.service';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SortBy } from '../../components/SortBy';
import { sortBy } from '../../components/SortBy/actions';
import { loadData } from './actions';

@connect((state) => ({
    results: state.resultsContainer.results,
    sortBy: state.sort.sortBy,
    searchBy: state.searchMovie.searchBy,
    searchBar: state.searchMovie.searchBar,
}))
export class Results extends React.Component {
    constructor(params) {
        super(params);
    }
    onSortByChange = (type) => {
        const params = {
            sortBy: type,
            searchBy: this.props.searchBy,
            search: this.props.searchBar,
            sortOrder: 'desc',
        }
        this.props.dispatch(sortBy(type));
        this.props.dispatch(loadData(params));
    }
    render() {
        const emptyElements = [1, 2, 3, 4];
        return <div className={(this.props.results.loading ? "results results--loading" : "results")}>
            <div className="results__header">
                {
                    this.props.hasSort ? <React.Fragment><span className="results__header-movies-count">
                        {this.props.results.total} movies found
                        </span> <SortBy {...this.props} onSortByChange={this.onSortByChange} /> </React.Fragment> : <span className="results__header-movies-count">
                            Films by {this.props.searchBar} genre
                        </span>
                }
            </div>
            <div className="results__container">
                {
                    this.props.results.movies.map((movie, index) => {
                        return <Link key={index} to={{ pathname: `/film/${movie.id}` }}>
                            <Movie
                                key={index}
                                title={movie.title}
                                type={movie.genres}
                                cover={movie.cover}
                                releaseDate={movie.releaseYear}
                            />
                        </Link>
                    })
                }
                {
                    emptyElements.map((key) => {
                        return <div key={key} className="movie movie--empty"></div>
                    })
                }
                {
                    this.props.results.movies.length === 0 ? <div className="results__no-found" >No films found</div> : ''
                }
            </div>
        </div>
    }
};
