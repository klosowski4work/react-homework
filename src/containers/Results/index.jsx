
import React from 'react';
import { SortBy } from '../SortBy';
import { Movie } from '../../components/Movie';
import './style.scss';
import { MoviesService } from '../../services/movies.service';

export class Results extends React.Component {
    constructor(params) {
        super(params);
        this.state = {
            results: [],
        }
    }

    componentDidMount() {
        MoviesService.getMovies().then(movies => {
            this.setState({
                results: movies,
            });
        });
    }

    render() {
        const emptyElements = [1, 2, 3, 4];
        return <div className="results">
            <div className="results__header">
                <span>x movies found</span>
                <SortBy />
            </div>
            <div className="results__container">
                {
                    this.state.results.map((movie, index) => {
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
